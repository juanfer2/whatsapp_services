import { ComponentEmiter, ComponentSubscription } from '@/components';

function Home() {
  return (
    <div>
      <h2>Home</h2>
      <ComponentEmiter />
      <ComponentSubscription />
    </div>
  );
}

export default Home;
