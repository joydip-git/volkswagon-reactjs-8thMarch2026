const employees = []

export const add = (e) => employees.push(e)
export const remove = (index) => employees.splice(index, 1)

export default employees