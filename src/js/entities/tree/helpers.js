export function _binaryFindInsertPos(s ,e, arr, itemSorthead) {
    while( s <=e) {
        const mid = Math.floor((s+e)/2)

        if (arr[mid].sorthead < itemSorthead) s = mid + 1;
        else e = mid - 1
    }

    return s
}

export function normalize(data) {
    return data.reduce((acc, item) => {
        if (acc[item.id] !== undefined) throw new Error('Equal id')
        return {
            ...acc,
            [item.id]: {
                ...item,
                children : item.node === 1 ? [] : null
            }
        }
    }, {})
}

export const _sortByHead = (a,b) => b.head - a.head

export const _sortBySorthead = (a,b) => a.sorthead - b.sorthead