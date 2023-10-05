import connectMongodb from "@/libs/mongodb/mongodb";
import Accounts from "@/models/register";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs"

const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},
            async authorize(credentials) {
                const {email, password } = credentials;
                
                try {
                    await connectMongodb();
                const user =  await Accounts.findOne({email})

                if (!user) {
                    return null
                }

               const passwordMath = await bcrypt.compare(password, user.password);

                   if (!passwordMath) {
                    return null;
                   } 
                   return user;
                } catch (error) {
                    console.log("errors",error);
                }
            }
        })
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages:{
        signIn: "/sign-in"
    }
}

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST}