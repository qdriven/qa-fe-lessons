# Dashboard

- Create the dashboard routes using file-system routing.
- Understand the role of folders and files when creating new route segments.
- Create a nested layout that can be shared between multiple dashboard pages.
- Understand what colocation, partial rendering, and the root layout are.
![img](https://nextjs.org/_next/image?url=%2Flearn%2Flight%2Ffolders-to-url-segments.png&w=3840&q=75)

## Make Router Work

![img.png](img.png)

```tsx
export default function Page(){
    return (
        <div>
            <Link href="/dashboard/customer"
                  className="flex items-center gap-5 self-start rounded-lg
                      bg-blue-500 px-6 py-3 text-sm font-medium
                      text-white transition-colors hover:bg-blue-400 md:text-base"
            >
                <span>customer</span> <ArrowRightIcon className="w-5 md:w-6"/>
            </Link>

            <Link href="/dashboard/invoice"
                  className="flex items-center gap-5 self-start rounded-lg
                      bg-blue-500 px-6 py-3 text-sm font-medium
                      text-white transition-colors hover:bg-blue-400 md:text-base"
            >
                <span>invoice</span> <ArrowRightIcon className="w-5 md:w-6"/>
            </Link>
        </div>
    )
}
```

```tsx

export default function Page(){
    return (
        <div>
            <p>Customer Page</p>
        </div>
    )
}
```

## Dashboard Layout

![img](https://nextjs.org/_next/image?url=%2Flearn%2Flight%2Fshared-layout-page.png&w=1920&q=75)

- Logo
- SideBar
- Page
![img](https://nextjs.org/_next/image?url=%2Flearn%2Flight%2Fpartial-rendering-dashboard.png&w=3840&q=75)


## Dashboard Application
- shared layout: shared layout in layout.tsx of folder root
- Router Group: () folder as shared page and layout

