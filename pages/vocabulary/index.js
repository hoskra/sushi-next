import { useRouter } from 'next/router'

import HeadComponent from "../../components/HeadComponent";
import Toggle from "../../components/Toggle";

export default function Vocabulary() {
  const router = useRouter()

  return (
    <>
      <HeadComponent />

      <h2>Vocabulary</h2>
      <input placeholder="search" />
      <Toggle />

      <button className="sushi-button" onClick={() => router.back()}> back </button>

    </>
  )
}