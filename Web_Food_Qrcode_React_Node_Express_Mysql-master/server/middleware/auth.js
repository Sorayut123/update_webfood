const jwt = require("jsonwebtoken");

// ✅ ตรวจสอบ JWT Token จาก Header
// function verifyToken(req, res, next) {
//   const authHeader = req.headers.authorization;

//   // ตรวจสอบว่ามี header และขึ้นต้นด้วย "Bearer "
//   if (!authHeader || !authHeader.startsWith("Bearer ")) {
//     return res.status(401).json({ message: "Unauthorized: Token not provided" });
//   }

//   const token = authHeader.split(" ")[1];

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded; // เช่น { id, role }
//     next();
//   } catch (err) {
//     return res.status(403).json({ message: "Token invalid or expired" });
//   }
// }

// // ✅ ตรวจสอบสิทธิ์ว่าเป็น owner เท่านั้น
// function isOwner(req, res, next) {
//   if (req.user.role !== "owner") {
//     return res.status(403).json({ message: "Access denied: Owner only" });
//   }
//   next();
// }
// const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized: Token not provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // แปลงเวลาหมดอายุจาก epoch (วินาที) เป็น readable format
    const expiresAt = new Date(decoded.exp * 1000).toISOString();

    // เพิ่ม expiresAt เข้าไป
    req.user = {
      ...decoded,
      expiresAt, // เช่น "2025-06-17T06:30:00.000Z"
    };

    next();
  } catch (err) {
    return res.status(403).json({ message: "Token invalid or expired" });
  }
}

function isOwner(req, res, next) {
  if (req.user.role !== "owner") {
    return res.status(403).json({ message: "Access denied: Owner only" });
  }
  next();
}



module.exports = { verifyToken, isOwner };
