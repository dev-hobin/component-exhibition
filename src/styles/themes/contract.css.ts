import { createThemeContract } from "@vanilla-extract/css";

export const vars = createThemeContract({
  "color-scheme": "light | black | cupcake",
  colors: {
    primary: "기본 색상",
    "primary-content": "기본 색상 위에 사용할 컨텐츠 색상",
    secondary: "보조 색상",
    "secondary-content": "보조 색상 위에 사용할 컨텐츠 색상",
    accent: "강조 색상",
    "accent-content": "강조 색상 위에 사용할 컨텐츠 색상",
    neutral: "중립 색상",
    "neutral-content": "중립 색상 위에 사용할 컨텐츠 색상",
    "base-100": "빈 배경에 사용할 기본 색상",
    "base-200": "조금 더 어두운 기본 색상",
    "base-300": "가장 어두운 기본 색상",
    "base-content": "기본 색상 위에 사용할 컨텐츠 색상",
    info: "정보 색상",
    "info-content": "정보 색상 위에 사용할 컨텐츠 색상",
    success: "성공 색상",
    "success-content": "성공 색상 위에 사용할 컨텐츠 색상",
    warning: "경고 색상",
    "warning-content": "경고 색상 위에 사용할 컨텐츠 색상",
    error: "에러 색상",
    "error-content": "에러 색상 위에 사용할 컨텐츠 색상",
  },
});
