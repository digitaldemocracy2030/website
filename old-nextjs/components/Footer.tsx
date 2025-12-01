import Link from 'next/link'
import { buttonVariants } from './ui/button'
export function Footer() {
  return (
    <footer>
      <div className="gradient h-0.5"></div>
      <div className="sm:flex justify-center pt-6">
        <div>
          <Link
            href="https://join.slack.com/t/dd2030/shared_invite/zt-3bg5nmxiv-CB9LXLpvxH_JvJil_EPa_w"
            className={`${buttonVariants({ variant: 'ghost' })} h-11`}
            target="_blank"
          >
            Slackに参加
          </Link>
        </div>
        <div>
          <Link
            href="https://github.com/digitaldemocracy2030"
            className={`${buttonVariants({ variant: 'ghost' })} h-11`}
            target="_blank"
          >
            GitHub
          </Link>
        </div>
        <div>
          <Link
            href="https://note.com/dd2030"
            className={`${buttonVariants({ variant: 'ghost' })} h-11`}
            target="_blank"
          >
            Note
          </Link>
        </div>
        <div>
          <Link href="/policies/privacy" className={`${buttonVariants({ variant: 'ghost' })} h-11`}>
            プライバシーポリシー
          </Link>
        </div>
        <div>
          <Link href="/policies/terms" className={`${buttonVariants({ variant: 'ghost' })} h-11`}>
            利用規約
          </Link>
        </div>
      </div>
      <div className="flex justify-center pt-4 pb-6">
        <small>© 2025 デジタル民主主義2030</small>
      </div>
    </footer>
  )
}
