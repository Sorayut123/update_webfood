// utils/generateOrderCode.js (คุณอาจสร้างไฟล์ใหม่ หรือวางใน component ก็ได้)
export function generateOrderCode(tableNumber) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let randomPart = '';
  for (let i = 0; i < 6; i++) {
    randomPart += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return `ORD-T${tableNumber}-${randomPart}`;
}
