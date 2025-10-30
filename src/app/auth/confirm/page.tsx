'use client';

/*
NOTE: 
If you have email confirmation turned on (the default), 
a new user will receive an email confirmation after signing up.
Change the email template to support a client-side authentication flow.
Go to the Auth templates page in your dashboard. In the Confirm signup template,
change {{ .ConfirmationURL }} to {{ .SiteURL }}/auth/confirm?token_hash={{ .TokenHash }}&type=email. 
*/

import { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import type { EmailOtpType } from '@supabase/supabase-js';

function ConfirmContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');

  useEffect(() => {
    const confirmEmail = async () => {
      const token_hash = searchParams.get('token_hash');
      const type = searchParams.get('type') as EmailOtpType | null;
      const next = searchParams.get('next') ?? '/dashboard';

      if (token_hash && type) {
        const supabase = createClient();

        const { error } = await supabase.auth.verifyOtp({
          type,
          token_hash,
        });

        if (!error) {
          setStatus('success');
          setTimeout(() => {
            router.push(next);
          }, 1500);
        } else {
          setStatus('error');
          setTimeout(() => {
            router.push('/error');
          }, 2000);
        }
      } else {
        setStatus('error');
        setTimeout(() => {
          router.push('/error');
        }, 2000);
      }
    };

    confirmEmail();
  }, [searchParams, router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
        {status === 'loading' && (
          <div className="text-center">
            <div className="mb-4 inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
            <h2 className="text-xl font-semibold text-gray-800">
              Confirmando tu email...
            </h2>
            <p className="mt-2 text-gray-600">Por favor espera un momento</p>
          </div>
        )}

        {status === 'success' && (
          <div className="text-center">
            <div className="mb-4 text-green-600">
              <svg
                className="mx-auto h-16 w-16"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-800">
              ¡Email confirmado!
            </h2>
            <p className="mt-2 text-gray-600">
              Redirigiendo al dashboard...
            </p>
          </div>
        )}

        {status === 'error' && (
          <div className="text-center">
            <div className="mb-4 text-red-600">
              <svg
                className="mx-auto h-16 w-16"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <h2 className="text-xl font-semibold text-gray-800">
              Error en la confirmación
            </h2>
            <p className="mt-2 text-gray-600">
              No se pudo confirmar tu email. Redirigiendo...
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ConfirmPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-gray-50">
          <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">
            <div className="text-center">
              <div className="mb-4 inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
              <h2 className="text-xl font-semibold text-gray-800">
                Cargando...
              </h2>
            </div>
          </div>
        </div>
      }
    >
      <ConfirmContent />
    </Suspense>
  );
}

