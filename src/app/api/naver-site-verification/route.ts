const VERIFICATION_PAYLOAD =
  'naver-site-verification: naver4f66426ef39e342ddb0dcbced69b7b74.html';

export function GET() {
  return new Response(VERIFICATION_PAYLOAD, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=0, must-revalidate',
    },
  });
}
