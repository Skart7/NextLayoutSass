export const ClassName = (...classes:string[]) => {
    return [...classes].join(' ').trim()
}