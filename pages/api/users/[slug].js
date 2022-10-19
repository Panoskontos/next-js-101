// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

export default (req,res) =>{
  res.status(200).json({ name: 'users' })  

}

// here you connect to a database