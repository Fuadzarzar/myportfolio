export default class Portfolio {
    #title
    #description 
    #stacks
    #link

    constructor(title, description, stacks, link) {
        this.#title = title
        this.#description = description
        this.#stacks = stacks
        this.#link = link
    }

    get title() { return this.#title}
    get description() { return this.#description}
    get stacks() { return this.#stacks}
    get link() { return this.#link}
}