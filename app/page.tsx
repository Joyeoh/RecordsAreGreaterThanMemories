import { redirect } from 'next/navigation'

export default function Home() {
  // / 경로로 접속 시 /daily 로 리디렉션합니다.
  redirect('/daily')
}
