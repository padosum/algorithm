function solution(id_list, report, k) {
    
  const removeDupReport = [...new Set(report)]
  
  const sender = removeDupReport.map((r) => r.split(' ')[0])
  const receiver = removeDupReport.map((r) => r.split(' ')[1])
  
  const receiverMap = new Map()
  receiver.forEach((r) => {
      receiverMap.set(r, (receiverMap.get(r) || 0) + 1)
  })
  
  const reportObj = {}
  sender.forEach((s, idx) => {
      const receivers = reportObj[s] || []
      receivers.push(receiver[idx])
      reportObj[s] = receivers
  })
  
  const result = id_list.map((id, idx) => {
      const arr = reportObj[id]
      if (!arr) {
          return 0
      } else {
          return arr.filter((reciever) => {
              return receiverMap.get(reciever) >= k
          }).length    
      }
  })
  
  return result;
}