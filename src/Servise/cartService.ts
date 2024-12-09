import CartModul from "../models/cartModel"
interface CreateCartForuser{
    userId:String
}
const CreateCartForuser=async({userId}:CreateCartForuser)=>{
const Cart=await CartModul.create({userId,totalAmont:0})
await Cart.save()
return Cart
}
interface GetActiveCartforuser{
    userId:String

}
export const  GetActiveCartforuser =async({userId}:GetActiveCartforuser)=>{
let cart=await CartModul.findOne({userId,status:'active'})
if(!cart){
cart =await CreateCartForuser({userId})
}
return cart
}