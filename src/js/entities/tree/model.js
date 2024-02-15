import { normalize, _binaryFindInsertPos, _sortByHead, _sortBySorthead } from "./helpers";

export function _buildTreeModel(data) {
            // нормализуем чтобы можно было удалять элементы
            // нижних уровней (которые отсортируются по массивам children) за O(1)
            // будет содержать вообще все ноды {node.id : node}
            const normalized = normalize(data)

            // будет финальной моделью с вложенными отсортированными children
            const tmpModel = {...normalized}
            Object.values(tmpModel)
                    // сортировка по параметру headSorting (decreasing order)
                    // чтобы не удалить элементы, у которых children не заполнен до конца
                    .sort(_sortByHead)
                    .forEach(item => {
                        const parent = item.head 
                        if (parent === null) return

                        const children = tmpModel[parent].children;
                        delete tmpModel[item.id]

                        if (children.length === 0) {
                            children.push(item)
                            return;
                        }
                        const insertPos = _binaryFindInsertPos(0, children.length - 1, children, item.sorthead)
                        children.splice(insertPos, 0, item);
                    })

            const finalModel = Object.values(tmpModel)
                            .sort(_sortBySorthead)

            return finalModel;
}