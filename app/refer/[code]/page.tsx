export default async function ReferPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code } = await params;

  console.log("PARAMS:", code);

  return (
    <div style={{ padding: 20 }}>
      <h1>Referral Code:</h1>
      <h2>{code}</h2>

      <pre>{JSON.stringify({ code }, null, 2)}</pre>
    </div>
  );
}
