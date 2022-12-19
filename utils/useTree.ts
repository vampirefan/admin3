export function useTreeFind(tree: any[], func: any): any {
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

export function useTreeFindPath(tree: any[], func: any, path = [] as any[]): any[] {
  if (!tree)
    return []
  for (const data of tree) {
    path.push(data)
    if (func(data))
      return path
    if (data.children) {
      const findChildren = useTreeFindPath(data.children, func, path)
      if (findChildren.length)
        return findChildren
    }
    path.pop()
  }
  return []
}

export function useTreeMap(tree: any[], func: any) {
  return tree.map((data: any) => {
    const result = func(data)
    if (data.children)
      result.children = useTreeMap(data.children, func)
    return result
  })
}
