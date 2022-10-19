
export default (req,res) =>{
    const { query:{id}} = req
    console.log(req)
    res.status(200).json({ name: 'users', id: id })  
  
  }
  