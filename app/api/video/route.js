import axios from "axios"
import { NextResponse } from "next/server";

export async function POST(req, res) {
    const body = await req.json();
    try {
        const data = await axios.post('https://fetchdatafromyoutube-production.up.railway.app/lana',{
            youtubeLink:body
        })
        return NextResponse.json(data.data)
    } catch (error) {
        return NextResponse.json('error upload')
    }
}