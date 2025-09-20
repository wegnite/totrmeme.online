'use client';

import { LoginWrapper } from '@/components/auth/login-wrapper';
import Container from '@/components/layout/container';
import { Logo } from '@/components/layout/logo';
import { ModeSwitcher } from '@/components/layout/mode-switcher';
import { NavbarMobile } from '@/components/layout/navbar-mobile';
import { UserButton } from '@/components/layout/user-button';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { getNavbarLinks } from '@/config/navbar-config';
import { useScroll } from '@/hooks/use-scroll';
import { LocaleLink, useLocalePathname } from '@/i18n/navigation';
import { authClient } from '@/lib/auth-client';
import { cn } from '@/lib/utils';
import { Routes } from '@/routes';
import { ArrowUpRightIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import { Skeleton } from '../ui/skeleton';
import LocaleSwitcher from './locale-switcher';

interface NavBarProps {
  scroll?: boolean;
}

const customNavigationMenuTriggerStyle = cn(
  navigationMenuTriggerStyle(),
  'relative rounded-full border border-transparent bg-transparent px-4 py-2 text-sm font-medium text-white/70 backdrop-blur',
  'hover:border-white/20 hover:bg-white/10 hover:text-white',
  'focus:border-white/25 focus:bg-white/10 focus:text-white',
  'data-active:font-semibold data-active:text-white',
  'data-[state=open]:border-white/25 data-[state=open]:bg-white/10 data-[state=open]:text-white'
);

export function Navbar({ scroll }: NavBarProps) {
  const t = useTranslations();
  const scrolled = useScroll(50);
  const menuLinks = getNavbarLinks();
  const localePathname = useLocalePathname();
  const [mounted, setMounted] = useState(false);
  const { data: session, isPending } = authClient.useSession();
  const currentUser = session?.user;
  // console.log(`Navbar, user:`, user);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      className={cn(
        'sticky inset-x-0 top-0 z-50 transition-all duration-300',
        scroll
          ? scrolled
            ? 'border-b border-white/10 bg-[#07031a]/85 backdrop-blur-2xl shadow-[0_20px_60px_-45px_rgba(109,91,255,0.6)]'
            : 'bg-transparent'
          : 'border-b border-white/10 bg-[#07031a]/85 backdrop-blur-2xl shadow-[0_20px_60px_-45px_rgba(109,91,255,0.6)]'
      )}
    >
      <Container className="px-6">
        {/* desktop navbar */}
        <nav className="hidden w-full items-center justify-between rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-xl lg:flex">
          {/* logo and name */}
          <div className="flex items-center">
            <LocaleLink href="/" className="flex items-center space-x-2">
              <Logo />
              <span className="font-display text-xl font-semibold text-white">
                {t('Metadata.name')}
              </span>
            </LocaleLink>
          </div>

          {/* menu links */}
          <div className="flex flex-1 items-center justify-center space-x-2">
            <NavigationMenu className="relative text-white/70">
              <NavigationMenuList className="flex items-center">
                {menuLinks?.map((item, index) =>
                  item.items ? (
                    <NavigationMenuItem key={index} className="relative">
                      <NavigationMenuTrigger
                        data-active={
                          item.items.some((subItem) =>
                            subItem.href
                              ? localePathname.startsWith(subItem.href)
                              : false
                          )
                            ? 'true'
                            : undefined
                        }
                        className={customNavigationMenuTriggerStyle}
                      >
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-4 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                          {item.items?.map((subItem, subIndex) => {
                            const isSubItemActive =
                              subItem.href &&
                              localePathname.startsWith(subItem.href);
                            return (
                              <li key={subIndex}>
                                <NavigationMenuLink asChild>
                                  <LocaleLink
                                    href={subItem.href || '#'}
                                    target={
                                      subItem.external ? '_blank' : undefined
                                    }
                                    rel={
                                      subItem.external
                                        ? 'noopener noreferrer'
                                        : undefined
                                    }
                                    className={cn(
                                      'group flex select-none flex-row items-center gap-4 rounded-2xl border border-transparent p-3 leading-none no-underline transition-colors',
                                      'hover:border-white/20 hover:bg-white/10 hover:text-white',
                                      'focus:border-white/25 focus:bg-white/10 focus:text-white',
                                      isSubItemActive &&
                                        'border-white/25 bg-white/10 text-white'
                                    )}
                                  >
                                    <div
                                      className={cn(
                                        'flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/5 text-white/60 transition-colors',
                                        'group-hover:bg-white/10 group-hover:text-white',
                                        'group-focus:bg-white/10 group-focus:text-white',
                                        isSubItemActive &&
                                          'bg-white/10 text-white'
                                      )}
                                    >
                                      {subItem.icon ? subItem.icon : null}
                                    </div>
                                    <div className="flex-1">
                                      <div
                                        className={cn(
                                          'text-sm font-medium text-white/80',
                                          'group-hover:text-white',
                                          'group-focus:text-white',
                                          isSubItemActive && 'text-white'
                                        )}
                                      >
                                        {subItem.title}
                                      </div>
                                      {subItem.description && (
                                        <div
                                          className={cn(
                                            'text-xs text-white/60',
                                            'group-hover:text-white/80',
                                            'group-focus:text-white/80',
                                            isSubItemActive && 'text-white/80'
                                          )}
                                        >
                                          {subItem.description}
                                        </div>
                                      )}
                                    </div>
                                    {subItem.external && (
                                      <ArrowUpRightIcon
                                        className={cn(
                                          'h-4 w-4 shrink-0 text-white/50',
                                          'group-hover:text-white',
                                          'group-focus:text-white',
                                          isSubItemActive && 'text-white'
                                        )}
                                      />
                                    )}
                                  </LocaleLink>
                                </NavigationMenuLink>
                              </li>
                            );
                          })}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : (
                    <NavigationMenuItem key={index}>
                      <NavigationMenuLink
                        asChild
                        active={
                          item.href
                            ? item.href === '/'
                              ? localePathname === '/'
                              : localePathname.startsWith(item.href)
                            : false
                        }
                        className={customNavigationMenuTriggerStyle}
                      >
                        <LocaleLink
                          href={item.href || '#'}
                          target={item.external ? '_blank' : undefined}
                          rel={
                            item.external ? 'noopener noreferrer' : undefined
                          }
                        >
                          {item.title}
                        </LocaleLink>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* navbar right show sign in or user */}
          <div className="flex items-center gap-x-4">
            {!mounted || isPending ? (
              <Skeleton className="size-8 border rounded-full" />
            ) : currentUser ? (
              <>
                {/* <CreditsBalanceButton /> */}
                <UserButton user={currentUser} />
              </>
            ) : (
              <div className="flex items-center gap-x-4">
                <LoginWrapper mode="modal" asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="cursor-pointer rounded-full border-white/30 bg-white/5 px-5 text-white hover:border-white/50 hover:bg-white/15"
                  >
                    {t('Common.login')}
                  </Button>
                </LoginWrapper>

                <LocaleLink
                  href={Routes.Register}
                  className={cn(
                    buttonVariants({
                      variant: 'default',
                      size: 'sm',
                    }),
                    'rounded-full bg-primary px-5 text-white shadow-[0_18px_40px_-24px_rgba(103,64,255,0.85)] hover:bg-primary/90'
                  )}
                >
                  {t('Common.signUp')}
                </LocaleLink>
              </div>
            )}

            <ModeSwitcher />
            <LocaleSwitcher />
          </div>
        </nav>

        {/* mobile navbar */}
        <NavbarMobile className="lg:hidden" />
      </Container>
    </section>
  );
}
