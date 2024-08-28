class TableService {

  prepareArrRows(str: string): string[] {
    let resultArr: string[] = []
    if (!str) { return resultArr }
    let newArr = str.split('[')
    newArr.shift()
    newArr.forEach(s => { resultArr.push('[' + s) })
    return resultArr
  }

}
  
export const tableService = new TableService()
