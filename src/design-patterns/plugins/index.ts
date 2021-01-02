type Constructor<T> = new (...args: any[]) => T
type UnionToIntersection<Union> = (Union extends any ? (argument:Union) => void : never) extends (argument: infer Intersection) => void ? Intersection : never
type AnyFunction = (...args: any) => any
type ReturnTypeOf<T extends AnyFunction | AnyFunction[]> = T extends AnyFunction ? ReturnType<T> : T extends AnyFunction[] ? UnionToIntersection<ReturnType<T[number]>> : never

type Extension = { [key: string]: Record<string, Function> | Function }
export type Plugin = (options: Options) => Extension | void
export type Options = { url: string }

export default class Base {
    static plugins: Plugin[] = []
    readonly options: Options

    constructor(options?: Options) {
        this.options = options
        const classConstructor = this.constructor as typeof Base
        classConstructor.plugins.forEach((plugin) => Object.assign(this, plugin(options)))
    }

    static extend<
        S extends Constructor<any> & { plugins: any[] },
        T extends Plugin | Plugin[]
    >(this: S, plugin: T) {
        const currentPlugins = this.plugins
        const BaseWithPlugins = class extends this {
            static plugins = currentPlugins.concat(plugin)
        }
        type Extension = ReturnTypeOf<T>
        return BaseWithPlugins as typeof BaseWithPlugins & Constructor<Extension>
    }

    static config<S extends Constructor<any>>(this: S, defaults: Options) {
        return class extends this {
            constructor(...args: any[]) {
                super(Object.assign({}, defaults, args[0] || {}))
            }
        }
    }
}

export const fooPlugin: Plugin = (options) => {
    return {
        foo: (): string => `${options.url}/foo`
    }
}
export const barPlugin: Plugin = (options) => {
    return {
        bar: (): string => `${options.url}/bar`
    }
}
