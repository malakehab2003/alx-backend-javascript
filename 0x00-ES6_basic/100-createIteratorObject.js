export default function createIteratorObject(report) {
  const list = [];
  for (const i of Object.values(report.allEmployees)) {
    list.push(...i);
  }
  return list;
}
