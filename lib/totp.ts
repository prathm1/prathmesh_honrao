import * as OTPAuth from "otpauth";

export function verifyTOTP(token: string): boolean {
  const secret = process.env.NEXT_PUBLIC_TOTP_SECRET;
  if (!secret) return false;

  const totp = new OTPAuth.TOTP({
    issuer: "Prathmesh Portfolio",
    label: "Studio",
    algorithm: "SHA1",
    digits: 6,
    period: 30,
    secret: OTPAuth.Secret.fromBase32(secret),
  });

  // Allow ±1 window (30s leeway for clock drift)
  const delta = totp.validate({ token, window: 1 });
  return delta !== null;
}

export function getTOTPUri(): string {
  const secret = process.env.NEXT_PUBLIC_TOTP_SECRET;
  if (!secret) return "";

  const totp = new OTPAuth.TOTP({
    issuer: "Prathmesh Portfolio",
    label: "Studio",
    algorithm: "SHA1",
    digits: 6,
    period: 30,
    secret: OTPAuth.Secret.fromBase32(secret),
  });

  return totp.toString();
}
