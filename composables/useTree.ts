export function useTreeFind(tree: any, func: any): any {
  for (const data of tree) {
    if (func(data))
      return data
    if (data.children) {
      const res = useTreeFind(data.children, func)
      if (res)
        return res
    }
  }
  return null
}
