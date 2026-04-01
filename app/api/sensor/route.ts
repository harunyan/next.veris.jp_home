import { NextResponse } from 'next/server';

// POSTリクエストを受け取る関数
export async function POST(request: Request) {
    try {
        // 1. ラズパイから送られてきたJSONを解析
        const data = await request.json();

        // 2. とりあえずサーバーのコンソール（VercelのLogs）に表示
        console.log('受信データ:', data);

        // 3. ラズパイに応答を返す
        return NextResponse.json({
            status: 'success',
            message: 'データを受信しました',
            received: data
        }, { status: 200 });

    } catch {
        return NextResponse.json({
            status: 'error',
            message: 'パースに失敗しました'
        }, { status: 400 });
    }
}

// GETリクエスト（ブラウザで直接アクセスした時用）
export async function GET() {
    return NextResponse.json({ message: "ここはPOST専用のAPIエンドポイントです" });
}
