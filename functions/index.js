export const onRequest: PagesFunction = async ({ request, next, env }) => {
  const url = new URL(request.url)
  const acceptHeader = headers.get('accept') | null ;
  if (acceptHeader.includes("application/json")){
    const response = env.ASSETS.fetch("https://" + url.hostname + "/index.json")
  }else{
      const response = await next();
  }
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Max-Age', '86400');

  response.headers.set('CV-Name', 'Sergio Maeso');
  response.headers.set('CV-Education', 'University Carlos III, Telematic Engineering, Bilingual');
  response.headers.set('CV-Experience-1', 'Solutions Engineer, Cloudflare, 2020-Present');
  response.headers.set('CV-Experience-2', 'Support Engineer, Nokia Nuage, 2018-2020');
  response.headers.set('CV-Experience-3', 'HPC Consultant, BBVA CIB, 2018-2018');
  response.headers.set('CV-Experience-4', 'Research Intern, GAST LAB, University Carlos III, 2016-2018');
  response.headers.set('CV-Experience-5', 'Research Intern, IMDEA Networks, 2015-2016');
  response.headers.set('CV-Skills', 'Programming languages; Networks');
  response.headers.set('CV-Languages', 'es-ES, es;q=0.9, en;q=0.8');
  return response;
};