import satori from 'satori';
import sharp from 'sharp';

// Google Fontsから取得したフォントデータを使用
async function fetchFont() {
  const res = await fetch(
    'https://fonts.googleapis.com/css2?family=Shippori+Mincho&display=swap'
  );
  const css = await res.text();
  const resource = css.match(
    /src: url\((.+)\) format\('(opentype|truetype)'\)/
  );
  
  if (!resource) {
    throw new Error('Failed to fetch font');
  }

  const fontUrl = resource[1];
  const fontRes = await fetch(fontUrl);
  return await fontRes.arrayBuffer();
}

export async function generateOgImage(date: string) {
  const fontData = await fetchFont();

  // SVGの生成
  const svg = await satori(
    {
      type: 'div',
      props: {
        style: {
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ffffff',
          gap: '2rem',
        },
        children: [
          {
            type: 'div',
            props: {
              style: {
                fontSize: 200,
                fontWeight: 400,
              },
              children: date,
            },
          },
          {
            type: 'div',
            props: {
              style: {
                fontSize: 64,
                fontWeight: 400,
                color: '#666666',
              },
              children: 'nikki',
            },
          },
        ],
      },
    },
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Shippori Mincho',
          data: fontData,
          style: 'normal',
        },
      ],
    }
  );

  // SVGをPNGに変換
  const png = await sharp(Buffer.from(svg))
    .png()
    .toBuffer();

  return png;
} 