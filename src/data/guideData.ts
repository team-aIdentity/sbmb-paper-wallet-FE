export interface GuideItem {
  id: string;
  title: string;
  content: string;
}

export interface GuideSection {
  id: string;
  title: string;
  items: GuideItem[];
}

export const guideData: Record<string, GuideSection> = {
  sbmb: {
    id: "sbmb",
    title: "SBMB",
    items: [
      {
        id: "sbmb-1",
        title: "SBMB 토큰 정보",
        content:
          "SBMB는 Base 네트워크에서 발행되는 토큰입니다.\n- 총 발행량: 1,000,000,000 SBMB\n- 소수점 자릿수: 18\n- 컨트랙트 주소: 0x412Ad8bd103Cbb467BB235503F798A8f9531E458",
      },
      {
        id: "sbmb-2",
        title: "SBMB 획득 방법",
        content:
          "1. 지갑 신청을 통해 에어드랍으로 획득\n2. 거래소에서 구매\n3. 유동성 풀에 참여하여 보상으로 획득\n4. 스테이킹을 통한 보상",
      },
    ],
  },
  wallet: {
    id: "wallet",
    title: "EVM 종이지갑",
    items: [
      {
        id: "wallet-1",
        title: "지갑 보안",
        content:
          "1. 시드 구문을 절대 온라인에 저장하지 마세요.\n2. 하드웨어 지갑 사용을 권장합니다.\n3. 정기적으로 백업을 확인하세요.\n4. 의심스러운 사이트에서는 지갑을 연결하지 마세요.",
      },
      {
        id: "wallet-2",
        title: "트랜잭션 확인",
        content:
          "1. 모든 트랜잭션을 신중하게 검토하세요.\n2. 가스비를 확인하고 적절한 가스비를 설정하세요.\n3. 트랜잭션 해시를 저장하여 나중에 확인할 수 있도록 하세요.",
      },
    ],
  },
  metamask: {
    id: "metamask",
    title: "Metamask",
    items: [
      {
        id: "metamask-1",
        title: "Metamask 설치 방법",
        content:
          "1. Chrome 웹 스토어에서 Metamask 확장 프로그램을 설치합니다.\n2. 설치 후 지갑을 생성하거나 기존 지갑을 가져옵니다.\n3. 보안을 위해 시드 구문을 안전한 곳에 백업합니다.",
      },
      {
        id: "metamask-2",
        title: "Base 네트워크 추가",
        content:
          "1. Metamask에서 네트워크 추가 버튼을 클릭합니다.\n2. Base 네트워크 정보를 입력합니다:\n   - 네트워크 이름: Base\n   - RPC URL: https://mainnet.base.org\n   - 체인 ID: 8453\n   - 통화 기호: ETH\n   - 블록 탐색기: https://basescan.org",
      },
      {
        id: "metamask-3",
        title: "SBMB 토큰 추가",
        content:
          "1. Metamask에서 토큰 가져오기 버튼을 클릭합니다.\n2. 토큰 컨트랙트 주소를 입력합니다: 0x412Ad8bd103Cbb467BB235503F798A8f9531E458\n3. 토큰 기호(SBMB)와 소수점 자릿수(18)가 자동으로 입력됩니다.\n4. 추가 버튼을 클릭하여 토큰을 지갑에 추가합니다.",
      },
    ],
  },
  faq: {
    id: "faq",
    title: "FAQ",
    items: [
      {
        id: "wallet-1",
        title: "지갑 보안",
        content:
          "1. 시드 구문을 절대 온라인에 저장하지 마세요.\n2. 하드웨어 지갑 사용을 권장합니다.\n3. 정기적으로 백업을 확인하세요.\n4. 의심스러운 사이트에서는 지갑을 연결하지 마세요.",
      },
      {
        id: "wallet-2",
        title: "트랜잭션 확인",
        content:
          "1. 모든 트랜잭션을 신중하게 검토하세요.\n2. 가스비를 확인하고 적절한 가스비를 설정하세요.\n3. 트랜잭션 해시를 저장하여 나중에 확인할 수 있도록 하세요.",
      },
    ],
  },
};

export const defaultSection = "sbmb";
