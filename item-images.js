// ==============================================================
// GZW TACTICAL TOOL - ITEM IMAGE DATABASE
// ==============================================================
// Anleitung: Lade die Bilder herunter, benenne sie exakt nach der ID 
// (z.B. "m4a1.png") und lade sie auf Github in den "images" Ordner hoch.

const imageBaseUrl = "https://raw.githubusercontent.com/Toxikologe/gzw-tool/main/images/";

const itemImages = {
    // --- NATO ARs ---
    "m4a1": imageBaseUrl + "m4a1.png",
    "m16a1": imageBaseUrl + "m16a1.png",
    "m201c": imageBaseUrl + "m201c.png",
    "cqa1": imageBaseUrl + "cqa1.png",
    "ddm4": imageBaseUrl + "ddm4.png",
    "ks1": imageBaseUrl + "ks1.png",
    "sicmcx": imageBaseUrl + "sicmcx.png",
    "mk18": imageBaseUrl + "mk18.png",

    // --- OSTBLOCK ARs ---
    "ak74": imageBaseUrl + "ak74.png",
    "ak74n": imageBaseUrl + "ak74n.png",
    "ak74m": imageBaseUrl + "ak74m.png",
    "aks74u": imageBaseUrl + "aks74u.png",
    "aks74un": imageBaseUrl + "aks74un.png",
    "akm": imageBaseUrl + "akm.png",
    "akmn": imageBaseUrl + "akmn.png",
    "akms": imageBaseUrl + "akms.png",
    "akmsn": imageBaseUrl + "akmsn.png",
    "ak101": imageBaseUrl + "ak101.png",
    "ak102": imageBaseUrl + "ak102.png",
    "ak103": imageBaseUrl + "ak103.png",
    "ak104": imageBaseUrl + "ak104.png",
    "ak105": imageBaseUrl + "ak105.png",
    "ak12": imageBaseUrl + "ak12.png",
    "ak15": imageBaseUrl + "ak15.png",
    "ak19": imageBaseUrl + "ak19.png",
    "ak308": imageBaseUrl + "ak308.png",
    "vz58": imageBaseUrl + "vz58.png",
    "vz58v": imageBaseUrl + "vz58v.png",
    "typ56": imageBaseUrl + "typ56.png",
    "typ56_1": imageBaseUrl + "typ56_1.png",
    "typ56_2": imageBaseUrl + "typ56_2.png",

    // --- DMRs & SNIPER ---
    "m14": imageBaseUrl + "m14.png",
    "m14ebr": imageBaseUrl + "m14ebr.png",
    "m1a": imageBaseUrl + "m1a.png",
    "m700": imageBaseUrl + "m700.png",
    "rem788": imageBaseUrl + "rem788.png",
    "mosin": imageBaseUrl + "mosin.png",
    "mosin_sniper": imageBaseUrl + "mosin_sniper.png",
    "mosin_obrez": imageBaseUrl + "mosin_obrez.png",
    "svd": imageBaseUrl + "svd.png",
    "svds": imageBaseUrl + "svds.png",
    "sks": imageBaseUrl + "sks.png",
    "op_sks": imageBaseUrl + "op_sks.png",

    // --- SMGs & SHOTGUNS ---
    "mp7a1": imageBaseUrl + "mp7a1.png",
    "mp7a2": imageBaseUrl + "mp7a2.png",
    "mp5a2": imageBaseUrl + "mp5a2.png",
    "mp5a3": imageBaseUrl + "mp5a3.png",
    "mp5sd": imageBaseUrl + "mp5sd.png",
    "mp5k": imageBaseUrl + "mp5k.png",
    "vityaz": imageBaseUrl + "vityaz.png",
    "vz61": imageBaseUrl + "vz61.png",
    "m870": imageBaseUrl + "m870.png",
    "moss590": imageBaseUrl + "moss590.png",
    "moss590a1": imageBaseUrl + "moss590a1.png",
    "moss590_shock": imageBaseUrl + "moss590_shock.png",

    // --- PISTOLS ---
    "alien": imageBaseUrl + "alien.png",
    "glock17": imageBaseUrl + "glock17.png",
    "glock19": imageBaseUrl + "glock19.png",
    "m9a1": imageBaseUrl + "m9a1.png",
    "m9a3": imageBaseUrl + "m9a3.png",
    "1911": imageBaseUrl + "1911.png",
    "ccc": imageBaseUrl + "ccc.png",
    "makarov": imageBaseUrl + "makarov.png",
    "makarov_pb": imageBaseUrl + "makarov_pb.png",
    "typ51": imageBaseUrl + "typ51.png"

    // --- GEAR & MEDICAL (Zukünftige Erweiterung) ---
    // Hier kannst du später Rüstung und Medical Items nach dem gleichen Muster eintragen:
    // "helm_fastmt": imageBaseUrl + "helm_fastmt.png",
};