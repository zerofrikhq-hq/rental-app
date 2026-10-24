import { APP_NAME } from '@rentkitta/shared';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 text-center text-gray-900">
      <h1 className="text-4xl font-semibold">{APP_NAME} Admin</h1>
      <p className="mt-4 text-lg text-gray-600">Admin dashboard setup completed successfully.</p>
    </main>
  );
}
