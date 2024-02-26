import Header from "@app/layout/Header/Header.tsx";
import Footer from "@app/layout/Footer/Footer.tsx";
import AppRouter from "@app/layout/appRouter/AppRouter.tsx";

const Layout = () => {

  return (
    <div className="flex flex-col w-full">
      <Header />
      <div className="flex flex-1">
        <main className="flex-1 w-full">
          <AppRouter/>
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Layout;
