import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 넥스트 앱에서 발생하는 모든 데이터 패칭을 로그로 남김
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  images: {
    domains: ["shopping-phinf.pstatic.net"],
  },
};

export default nextConfig;
