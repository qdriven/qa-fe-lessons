PROJECT=$1

echo "create project"
pnpm create next-app@latest ${PROJECT} --typescript --tailwind --eslint

echo "init shadcn-ui"

```shell
pnpm dlx shadcn-ui@latest init
```