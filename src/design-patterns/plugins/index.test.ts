import faker from 'faker'
import Base, { fooPlugin, barPlugin } from "./index";

describe('Plugin architecture', () => {
    it('should be pluggable', () => {
        const url = faker.internet.url()
        const API = Base
            .config({ url })
            .extend(fooPlugin)
            .extend(barPlugin)

        const api = new API()

        expect(api.foo()).toBe(`${url}/foo`)
        expect(api.bar()).toBe(`${url}/bar`)
    })
})
