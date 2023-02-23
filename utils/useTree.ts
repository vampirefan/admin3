/**
 * Find in tree arrays
 * @param { Array } tree { [prop:string]:any, children:any[] }[]
 * @param { Function } func find function
 */
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

/**
 * Find in tree arrays
 * @param { Array } tree { [prop:string]:any, children:any[] }[]
 * @param { Function } func find function
 */
export function useTreeFindParent(tree: any[], func: any): any {
  const isNil = (array: any) => !(Array.isArray(array) && array.length)
  for (const node of tree) {
    if (func(node))
      return tree
    if (!isNil(node.children)) {
      const res = useTreeFind(node.children, func)
      if (res)
        return node
    }
  }
  return null
}

/**
 * Find Path in tree arrays
 * @param { Array } tree { [prop:string]:any, children:any[] }[]
 * @param { Function } func find function
 */
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

/**
 * Map func for tree arrays
 * @param { Array } tree { [prop:string]:any, children:any[] }[]
 * @param { Function } func map function
 */
export function useTreeMap(tree: any[], func: any) {
  return tree.map((data: any) => {
    const result = func(data)
    if (data.children)
      result.children = useTreeMap(data.children, func)
    return result
  })
}

/**
 * Foreach tree arrays 前序遍历 node 节点
 * @param { Array } tree { [prop:string]:any, children:any[] }[]
 * @param { Function } func callback function
 */
export function useTreeForeachPreOrder(tree: any[], func: any, level = 0) {
  const isNil = (array: any) => !(Array.isArray(array) && array.length)
  for (const node of tree) {
    node.level = level
    func(node)
    if (!isNil(node.children))
      useTreeForeachPreOrder(node.children, func, level + 1)
  }
}

/**
 * 列表结构转树结构
 * @param { Array } tree { [prop:string]:any, children:any[] }[]
 * @param { Function } func callback function
 */

export function useListToTree(list: any[], id = 'id', parent = 'parentId') {
  const info = list.reduce((map, node) => {
    map[node[id]] = node
    node.children = []
    return map
  }, {})
  return list.filter((node) => {
    info[node[parent]] && info[node[parent]].children.push(node)
    return !node[parent]
  })
}
