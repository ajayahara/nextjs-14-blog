"use server"

import { revalidatePath } from "next/cache";
import { BlogModel } from "../models/blog.model";
import { ConnectToDb } from "../config/db";
import { UserModel } from "../models/user.model";

export const addPost=async (formData:FormData)=>{
    try {
        ConnectToDb()
        const {title,name,img,desc,userId}=Object.fromEntries(formData);
        const newBlog=new BlogModel({title,name,img,desc,userId});
        await newBlog.save();
        revalidatePath("/blog");
        revalidatePath("/admin");
    } catch (error) {
        console.log(error);
        return {error:'Something went wrong'}
    }
} 
export const deletePost=async (formData:FormData)=>{
    const { id } = Object.fromEntries(formData);
    try {
        ConnectToDb();
        await BlogModel.findByIdAndDelete(id);
        revalidatePath("/blog");
        revalidatePath("/admin");
    } catch (error) {
        console.log(error);
        return {error:'Something went wrong'}
    }
}
export const addUser=async (formData:FormData)=>{
    const { username, email, password, img } = Object.fromEntries(formData);
    try {
      ConnectToDb();
      const newUser = new UserModel({username,email,password,img});
      await newUser.save();
      console.log("saved to db");
      revalidatePath("/admin");
    } catch (err) {
      console.log(err);
      return { error: "Something went wrong!" };
    }
} 
export const deleteUser = async (formData:FormData) => {
    const { id } = Object.fromEntries(formData);
    try {
      ConnectToDb();
      await BlogModel.deleteMany({ userId: id });
      await UserModel.findByIdAndDelete(id);
      revalidatePath("/admin");
    } catch (err) {
      console.log(err);
      return { error: "Something went wrong!" };
    }
  };