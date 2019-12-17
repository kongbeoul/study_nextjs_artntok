import { useRouter } from 'next/router';

export default () => {
  const router = useRouter();
  const { query: { artist: id } } = router;

  return (
    <div>{ id }</div>
  )
}

