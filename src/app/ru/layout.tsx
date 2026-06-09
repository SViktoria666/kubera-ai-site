export default function RuLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="locale-ru" lang="ru">
      {children}
    </div>
  );
}
