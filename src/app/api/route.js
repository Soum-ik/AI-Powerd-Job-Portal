import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function GET(req, res) {
  try {
    let result = "da";
    const response  = await prisma.job.findMany()
    console.log(response, 'checking response');
    
    return NextResponse.json({ status: "Success", data: result });
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json({ status: "fail", error: error });
  }
}
