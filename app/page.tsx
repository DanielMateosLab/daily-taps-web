import LoginForm from "#/components/LoginForm";
import ThemePicker from "#/components/themePicker/themePicker";

export default function Page() {
  return (
    <div className="container flex flex-col min-h-screen">
      <main className="grow flex flex-col gap-6 py-8">
        <h1 className="text-primary text-8xl text-center">DAILY TAPS</h1>
        <p className="text-on-surface-light text-2xl text-center">
          The best companion for your workouts
        </p>
        <LoginForm />
      </main>
      <footer className="flex gap-6 justify-center items-center py-4">
        <a
          href="#"
          className="text-on-surface-light hover:text-primary-contrast"
        >
          Cookies
        </a>
        <ThemePicker />
      </footer>
    </div>
  );
}
