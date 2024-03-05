import ChatHeader from './chat-panel/ChatHeader';
import InputSection from './chat-panel/InputSection';

export default function ChatPanel() {
  return (
    <div className="h-dvh max-w-full grow p-2">
      <div className="flex h-full w-full flex-col gap-4 rounded-3xl border p-4">
        <ChatHeader />
        <div className="h-full w-full rounded-lg border bg-card p-4 text-card-foreground shadow-sm">
          <span>chat panel </span>
          <p>
            معمولاً طراحان گرافیک برای صفحه‌آرایی، نخست از متن‌های آزمایشی و
            بی‌معنی استفاده می‌کنند تا صرفاً به مشتری یا صاحب‌کار خود نشان دهند
            که صفحهٔ طراحی یا صفحه‌بندی شده، بعد از اینکه متن در آن قرار گیرد،
            چگونه به نظر می‌رسد و قلم‌ها و اندازه‌بندی‌ها چگونه در نظر گرفته
            شده‌است. از آنجایی که طراحان عموماً نویسندهٔ متن نیستند و وظیفهٔ
            رعایت حق تکثیر متون را ندارند و در همان حال، کار آن‌ها به‌نوعی
            وابسته به متن است، آن‌ها با استفاده از محتویات ساختگی، صفحهٔ گرافیکی
            خود را صفحه‌آرایی می‌کنند تا مرحلهٔ طراحی و صفحه‌بندی را به پایان
            برند.
          </p>
        </div>
        <InputSection />
      </div>
    </div>
  );
}
