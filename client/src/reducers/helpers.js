export function putProcessingStatus(list, updating, deleting) {
  return list.map(obj => ({
    ...obj,
    updating: updating.includes(obj.id),
    deleting: deleting.includes(obj.id)
  }))
}
