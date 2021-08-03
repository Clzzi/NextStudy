export default (req, res) => {
  if (req.method === "GET") {
    res.setHeader("Set-Cookie", "a_name=Mike;Max-Age=0;HttpOnly,Secure");
    res.statusCode = 200;
    res.json({ message: "OK" });
  }
};
