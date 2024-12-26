import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/past')({
  component: () => <div>Hello /past!</div>,
})
