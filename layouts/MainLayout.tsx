import Header from '../components/Header';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <Header />
      <main className="p-6">{children}</main>
    </div>
  );
};

export default MainLayout;