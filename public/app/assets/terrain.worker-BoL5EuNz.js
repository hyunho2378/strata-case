(function() {
	//#region node_modules/robust-predicates/esm/util.js
	const epsilon = 11102230246251565e-32;
	const splitter = 134217729;
	const resulterrbound = 3.000000000000001 * epsilon;
	function sum(elen, e, flen, f, h) {
		let Q, Qnew, hh, bvirt;
		let enow = e[0];
		let fnow = f[0];
		let eindex = 0;
		let findex = 0;
		if (fnow > enow === fnow > -enow) {
			Q = enow;
			enow = e[++eindex];
		} else {
			Q = fnow;
			fnow = f[++findex];
		}
		let hindex = 0;
		if (eindex < elen && findex < flen) {
			if (fnow > enow === fnow > -enow) {
				Qnew = enow + Q;
				hh = Q - (Qnew - enow);
				enow = e[++eindex];
			} else {
				Qnew = fnow + Q;
				hh = Q - (Qnew - fnow);
				fnow = f[++findex];
			}
			Q = Qnew;
			if (hh !== 0) h[hindex++] = hh;
			while (eindex < elen && findex < flen) {
				if (fnow > enow === fnow > -enow) {
					Qnew = Q + enow;
					bvirt = Qnew - Q;
					hh = Q - (Qnew - bvirt) + (enow - bvirt);
					enow = e[++eindex];
				} else {
					Qnew = Q + fnow;
					bvirt = Qnew - Q;
					hh = Q - (Qnew - bvirt) + (fnow - bvirt);
					fnow = f[++findex];
				}
				Q = Qnew;
				if (hh !== 0) h[hindex++] = hh;
			}
		}
		while (eindex < elen) {
			Qnew = Q + enow;
			bvirt = Qnew - Q;
			hh = Q - (Qnew - bvirt) + (enow - bvirt);
			enow = e[++eindex];
			Q = Qnew;
			if (hh !== 0) h[hindex++] = hh;
		}
		while (findex < flen) {
			Qnew = Q + fnow;
			bvirt = Qnew - Q;
			hh = Q - (Qnew - bvirt) + (fnow - bvirt);
			fnow = f[++findex];
			Q = Qnew;
			if (hh !== 0) h[hindex++] = hh;
		}
		if (Q !== 0 || hindex === 0) h[hindex++] = Q;
		return hindex;
	}
	function sum_three(alen, a, blen, b, clen, c, tmp, out) {
		return sum(sum(alen, a, blen, b, tmp), tmp, clen, c, out);
	}
	function scale(elen, e, b, h) {
		let Q, sum, hh, product1, product0;
		let bvirt, c, ahi, alo, bhi, blo;
		c = splitter * b;
		bhi = c - (c - b);
		blo = b - bhi;
		let enow = e[0];
		Q = enow * b;
		c = splitter * enow;
		ahi = c - (c - enow);
		alo = enow - ahi;
		hh = alo * blo - (Q - ahi * bhi - alo * bhi - ahi * blo);
		let hindex = 0;
		if (hh !== 0) h[hindex++] = hh;
		for (let i = 1; i < elen; i++) {
			enow = e[i];
			product1 = enow * b;
			c = splitter * enow;
			ahi = c - (c - enow);
			alo = enow - ahi;
			product0 = alo * blo - (product1 - ahi * bhi - alo * bhi - ahi * blo);
			sum = Q + product0;
			bvirt = sum - Q;
			hh = Q - (sum - bvirt) + (product0 - bvirt);
			if (hh !== 0) h[hindex++] = hh;
			Q = product1 + sum;
			hh = sum - (Q - product1);
			if (hh !== 0) h[hindex++] = hh;
		}
		if (Q !== 0 || hindex === 0) h[hindex++] = Q;
		return hindex;
	}
	function estimate(elen, e) {
		let Q = e[0];
		for (let i = 1; i < elen; i++) Q += e[i];
		return Q;
	}
	function vec(n) {
		return new Float64Array(n);
	}
	//#endregion
	//#region node_modules/robust-predicates/esm/orient2d.js
	const ccwerrboundA = 3.0000000000000018 * epsilon;
	const ccwerrboundB = 2.0000000000000013 * epsilon;
	const ccwerrboundC = 9.000000000000007 * epsilon * epsilon;
	const B = vec(4);
	const C1 = vec(8);
	const C2 = vec(12);
	const D = vec(16);
	const u$2 = vec(4);
	function orient2dadapt(ax, ay, bx, by, cx, cy, detsum) {
		let acxtail, acytail, bcxtail, bcytail;
		let bvirt, c, ahi, alo, bhi, blo, _i, _j, _0, s1, s0, t1, t0, u3;
		const acx = ax - cx;
		const bcx = bx - cx;
		const acy = ay - cy;
		const bcy = by - cy;
		s1 = acx * bcy;
		c = splitter * acx;
		ahi = c - (c - acx);
		alo = acx - ahi;
		c = splitter * bcy;
		bhi = c - (c - bcy);
		blo = bcy - bhi;
		s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
		t1 = acy * bcx;
		c = splitter * acy;
		ahi = c - (c - acy);
		alo = acy - ahi;
		c = splitter * bcx;
		bhi = c - (c - bcx);
		blo = bcx - bhi;
		t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
		_i = s0 - t0;
		bvirt = s0 - _i;
		B[0] = s0 - (_i + bvirt) + (bvirt - t0);
		_j = s1 + _i;
		bvirt = _j - s1;
		_0 = s1 - (_j - bvirt) + (_i - bvirt);
		_i = _0 - t1;
		bvirt = _0 - _i;
		B[1] = _0 - (_i + bvirt) + (bvirt - t1);
		u3 = _j + _i;
		bvirt = u3 - _j;
		B[2] = _j - (u3 - bvirt) + (_i - bvirt);
		B[3] = u3;
		let det = estimate(4, B);
		let errbound = ccwerrboundB * detsum;
		if (det >= errbound || -det >= errbound) return det;
		bvirt = ax - acx;
		acxtail = ax - (acx + bvirt) + (bvirt - cx);
		bvirt = bx - bcx;
		bcxtail = bx - (bcx + bvirt) + (bvirt - cx);
		bvirt = ay - acy;
		acytail = ay - (acy + bvirt) + (bvirt - cy);
		bvirt = by - bcy;
		bcytail = by - (bcy + bvirt) + (bvirt - cy);
		if (acxtail === 0 && acytail === 0 && bcxtail === 0 && bcytail === 0) return det;
		errbound = ccwerrboundC * detsum + resulterrbound * Math.abs(det);
		det += acx * bcytail + bcy * acxtail - (acy * bcxtail + bcx * acytail);
		if (det >= errbound || -det >= errbound) return det;
		s1 = acxtail * bcy;
		c = splitter * acxtail;
		ahi = c - (c - acxtail);
		alo = acxtail - ahi;
		c = splitter * bcy;
		bhi = c - (c - bcy);
		blo = bcy - bhi;
		s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
		t1 = acytail * bcx;
		c = splitter * acytail;
		ahi = c - (c - acytail);
		alo = acytail - ahi;
		c = splitter * bcx;
		bhi = c - (c - bcx);
		blo = bcx - bhi;
		t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
		_i = s0 - t0;
		bvirt = s0 - _i;
		u$2[0] = s0 - (_i + bvirt) + (bvirt - t0);
		_j = s1 + _i;
		bvirt = _j - s1;
		_0 = s1 - (_j - bvirt) + (_i - bvirt);
		_i = _0 - t1;
		bvirt = _0 - _i;
		u$2[1] = _0 - (_i + bvirt) + (bvirt - t1);
		u3 = _j + _i;
		bvirt = u3 - _j;
		u$2[2] = _j - (u3 - bvirt) + (_i - bvirt);
		u$2[3] = u3;
		const C1len = sum(4, B, 4, u$2, C1);
		s1 = acx * bcytail;
		c = splitter * acx;
		ahi = c - (c - acx);
		alo = acx - ahi;
		c = splitter * bcytail;
		bhi = c - (c - bcytail);
		blo = bcytail - bhi;
		s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
		t1 = acy * bcxtail;
		c = splitter * acy;
		ahi = c - (c - acy);
		alo = acy - ahi;
		c = splitter * bcxtail;
		bhi = c - (c - bcxtail);
		blo = bcxtail - bhi;
		t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
		_i = s0 - t0;
		bvirt = s0 - _i;
		u$2[0] = s0 - (_i + bvirt) + (bvirt - t0);
		_j = s1 + _i;
		bvirt = _j - s1;
		_0 = s1 - (_j - bvirt) + (_i - bvirt);
		_i = _0 - t1;
		bvirt = _0 - _i;
		u$2[1] = _0 - (_i + bvirt) + (bvirt - t1);
		u3 = _j + _i;
		bvirt = u3 - _j;
		u$2[2] = _j - (u3 - bvirt) + (_i - bvirt);
		u$2[3] = u3;
		const C2len = sum(C1len, C1, 4, u$2, C2);
		s1 = acxtail * bcytail;
		c = splitter * acxtail;
		ahi = c - (c - acxtail);
		alo = acxtail - ahi;
		c = splitter * bcytail;
		bhi = c - (c - bcytail);
		blo = bcytail - bhi;
		s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
		t1 = acytail * bcxtail;
		c = splitter * acytail;
		ahi = c - (c - acytail);
		alo = acytail - ahi;
		c = splitter * bcxtail;
		bhi = c - (c - bcxtail);
		blo = bcxtail - bhi;
		t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
		_i = s0 - t0;
		bvirt = s0 - _i;
		u$2[0] = s0 - (_i + bvirt) + (bvirt - t0);
		_j = s1 + _i;
		bvirt = _j - s1;
		_0 = s1 - (_j - bvirt) + (_i - bvirt);
		_i = _0 - t1;
		bvirt = _0 - _i;
		u$2[1] = _0 - (_i + bvirt) + (bvirt - t1);
		u3 = _j + _i;
		bvirt = u3 - _j;
		u$2[2] = _j - (u3 - bvirt) + (_i - bvirt);
		u$2[3] = u3;
		const Dlen = sum(C2len, C2, 4, u$2, D);
		return D[Dlen - 1];
	}
	function orient2d(ax, ay, bx, by, cx, cy) {
		const detleft = (ay - cy) * (bx - cx);
		const detright = (ax - cx) * (by - cy);
		const det = detleft - detright;
		const detsum = Math.abs(detleft + detright);
		if (Math.abs(det) >= ccwerrboundA * detsum) return det;
		return -orient2dadapt(ax, ay, bx, by, cx, cy, detsum);
	}
	vec(4);
	vec(4);
	vec(4);
	vec(4);
	vec(4);
	vec(4);
	vec(4);
	vec(4);
	vec(4);
	vec(8);
	vec(8);
	vec(8);
	vec(4);
	vec(8);
	vec(8);
	vec(16);
	vec(12);
	vec(192);
	vec(192);
	//#endregion
	//#region node_modules/robust-predicates/esm/incircle.js
	const iccerrboundA = 10.00000000000001 * epsilon;
	const iccerrboundB = 4.000000000000005 * epsilon;
	const iccerrboundC = 44.000000000000064 * epsilon * epsilon;
	const bc$1 = vec(4);
	const ca = vec(4);
	const ab$1 = vec(4);
	const aa = vec(4);
	const bb = vec(4);
	const cc = vec(4);
	const u = vec(4);
	const v = vec(4);
	const axtbc = vec(8);
	const aytbc = vec(8);
	const bxtca = vec(8);
	const bytca = vec(8);
	const cxtab = vec(8);
	const cytab = vec(8);
	const abt = vec(8);
	const bct = vec(8);
	const cat = vec(8);
	const abtt = vec(4);
	const bctt = vec(4);
	const catt = vec(4);
	const _8$1 = vec(8);
	const _16$1 = vec(16);
	const _16b = vec(16);
	const _16c = vec(16);
	const _32 = vec(32);
	const _32b = vec(32);
	const _48$1 = vec(48);
	const _64 = vec(64);
	let fin$1 = vec(1152);
	let fin2 = vec(1152);
	function finadd(finlen, a, alen) {
		finlen = sum(finlen, fin$1, a, alen, fin2);
		const tmp = fin$1;
		fin$1 = fin2;
		fin2 = tmp;
		return finlen;
	}
	function incircleadapt(ax, ay, bx, by, cx, cy, dx, dy, permanent) {
		let finlen;
		let adxtail, bdxtail, cdxtail, adytail, bdytail, cdytail;
		let axtbclen, aytbclen, bxtcalen, bytcalen, cxtablen, cytablen;
		let abtlen, bctlen, catlen;
		let abttlen, bcttlen, cattlen;
		let n1, n0;
		let bvirt, c, ahi, alo, bhi, blo, _i, _j, _0, s1, s0, t1, t0, u3;
		const adx = ax - dx;
		const bdx = bx - dx;
		const cdx = cx - dx;
		const ady = ay - dy;
		const bdy = by - dy;
		const cdy = cy - dy;
		s1 = bdx * cdy;
		c = splitter * bdx;
		ahi = c - (c - bdx);
		alo = bdx - ahi;
		c = splitter * cdy;
		bhi = c - (c - cdy);
		blo = cdy - bhi;
		s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
		t1 = cdx * bdy;
		c = splitter * cdx;
		ahi = c - (c - cdx);
		alo = cdx - ahi;
		c = splitter * bdy;
		bhi = c - (c - bdy);
		blo = bdy - bhi;
		t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
		_i = s0 - t0;
		bvirt = s0 - _i;
		bc$1[0] = s0 - (_i + bvirt) + (bvirt - t0);
		_j = s1 + _i;
		bvirt = _j - s1;
		_0 = s1 - (_j - bvirt) + (_i - bvirt);
		_i = _0 - t1;
		bvirt = _0 - _i;
		bc$1[1] = _0 - (_i + bvirt) + (bvirt - t1);
		u3 = _j + _i;
		bvirt = u3 - _j;
		bc$1[2] = _j - (u3 - bvirt) + (_i - bvirt);
		bc$1[3] = u3;
		s1 = cdx * ady;
		c = splitter * cdx;
		ahi = c - (c - cdx);
		alo = cdx - ahi;
		c = splitter * ady;
		bhi = c - (c - ady);
		blo = ady - bhi;
		s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
		t1 = adx * cdy;
		c = splitter * adx;
		ahi = c - (c - adx);
		alo = adx - ahi;
		c = splitter * cdy;
		bhi = c - (c - cdy);
		blo = cdy - bhi;
		t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
		_i = s0 - t0;
		bvirt = s0 - _i;
		ca[0] = s0 - (_i + bvirt) + (bvirt - t0);
		_j = s1 + _i;
		bvirt = _j - s1;
		_0 = s1 - (_j - bvirt) + (_i - bvirt);
		_i = _0 - t1;
		bvirt = _0 - _i;
		ca[1] = _0 - (_i + bvirt) + (bvirt - t1);
		u3 = _j + _i;
		bvirt = u3 - _j;
		ca[2] = _j - (u3 - bvirt) + (_i - bvirt);
		ca[3] = u3;
		s1 = adx * bdy;
		c = splitter * adx;
		ahi = c - (c - adx);
		alo = adx - ahi;
		c = splitter * bdy;
		bhi = c - (c - bdy);
		blo = bdy - bhi;
		s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
		t1 = bdx * ady;
		c = splitter * bdx;
		ahi = c - (c - bdx);
		alo = bdx - ahi;
		c = splitter * ady;
		bhi = c - (c - ady);
		blo = ady - bhi;
		t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
		_i = s0 - t0;
		bvirt = s0 - _i;
		ab$1[0] = s0 - (_i + bvirt) + (bvirt - t0);
		_j = s1 + _i;
		bvirt = _j - s1;
		_0 = s1 - (_j - bvirt) + (_i - bvirt);
		_i = _0 - t1;
		bvirt = _0 - _i;
		ab$1[1] = _0 - (_i + bvirt) + (bvirt - t1);
		u3 = _j + _i;
		bvirt = u3 - _j;
		ab$1[2] = _j - (u3 - bvirt) + (_i - bvirt);
		ab$1[3] = u3;
		finlen = sum(sum(sum(scale(scale(4, bc$1, adx, _8$1), _8$1, adx, _16$1), _16$1, scale(scale(4, bc$1, ady, _8$1), _8$1, ady, _16b), _16b, _32), _32, sum(scale(scale(4, ca, bdx, _8$1), _8$1, bdx, _16$1), _16$1, scale(scale(4, ca, bdy, _8$1), _8$1, bdy, _16b), _16b, _32b), _32b, _64), _64, sum(scale(scale(4, ab$1, cdx, _8$1), _8$1, cdx, _16$1), _16$1, scale(scale(4, ab$1, cdy, _8$1), _8$1, cdy, _16b), _16b, _32), _32, fin$1);
		let det = estimate(finlen, fin$1);
		let errbound = iccerrboundB * permanent;
		if (det >= errbound || -det >= errbound) return det;
		bvirt = ax - adx;
		adxtail = ax - (adx + bvirt) + (bvirt - dx);
		bvirt = ay - ady;
		adytail = ay - (ady + bvirt) + (bvirt - dy);
		bvirt = bx - bdx;
		bdxtail = bx - (bdx + bvirt) + (bvirt - dx);
		bvirt = by - bdy;
		bdytail = by - (bdy + bvirt) + (bvirt - dy);
		bvirt = cx - cdx;
		cdxtail = cx - (cdx + bvirt) + (bvirt - dx);
		bvirt = cy - cdy;
		cdytail = cy - (cdy + bvirt) + (bvirt - dy);
		if (adxtail === 0 && bdxtail === 0 && cdxtail === 0 && adytail === 0 && bdytail === 0 && cdytail === 0) return det;
		errbound = iccerrboundC * permanent + resulterrbound * Math.abs(det);
		det += (adx * adx + ady * ady) * (bdx * cdytail + cdy * bdxtail - (bdy * cdxtail + cdx * bdytail)) + 2 * (adx * adxtail + ady * adytail) * (bdx * cdy - bdy * cdx) + ((bdx * bdx + bdy * bdy) * (cdx * adytail + ady * cdxtail - (cdy * adxtail + adx * cdytail)) + 2 * (bdx * bdxtail + bdy * bdytail) * (cdx * ady - cdy * adx)) + ((cdx * cdx + cdy * cdy) * (adx * bdytail + bdy * adxtail - (ady * bdxtail + bdx * adytail)) + 2 * (cdx * cdxtail + cdy * cdytail) * (adx * bdy - ady * bdx));
		if (det >= errbound || -det >= errbound) return det;
		if (bdxtail !== 0 || bdytail !== 0 || cdxtail !== 0 || cdytail !== 0) {
			s1 = adx * adx;
			c = splitter * adx;
			ahi = c - (c - adx);
			alo = adx - ahi;
			s0 = alo * alo - (s1 - ahi * ahi - (ahi + ahi) * alo);
			t1 = ady * ady;
			c = splitter * ady;
			ahi = c - (c - ady);
			alo = ady - ahi;
			t0 = alo * alo - (t1 - ahi * ahi - (ahi + ahi) * alo);
			_i = s0 + t0;
			bvirt = _i - s0;
			aa[0] = s0 - (_i - bvirt) + (t0 - bvirt);
			_j = s1 + _i;
			bvirt = _j - s1;
			_0 = s1 - (_j - bvirt) + (_i - bvirt);
			_i = _0 + t1;
			bvirt = _i - _0;
			aa[1] = _0 - (_i - bvirt) + (t1 - bvirt);
			u3 = _j + _i;
			bvirt = u3 - _j;
			aa[2] = _j - (u3 - bvirt) + (_i - bvirt);
			aa[3] = u3;
		}
		if (cdxtail !== 0 || cdytail !== 0 || adxtail !== 0 || adytail !== 0) {
			s1 = bdx * bdx;
			c = splitter * bdx;
			ahi = c - (c - bdx);
			alo = bdx - ahi;
			s0 = alo * alo - (s1 - ahi * ahi - (ahi + ahi) * alo);
			t1 = bdy * bdy;
			c = splitter * bdy;
			ahi = c - (c - bdy);
			alo = bdy - ahi;
			t0 = alo * alo - (t1 - ahi * ahi - (ahi + ahi) * alo);
			_i = s0 + t0;
			bvirt = _i - s0;
			bb[0] = s0 - (_i - bvirt) + (t0 - bvirt);
			_j = s1 + _i;
			bvirt = _j - s1;
			_0 = s1 - (_j - bvirt) + (_i - bvirt);
			_i = _0 + t1;
			bvirt = _i - _0;
			bb[1] = _0 - (_i - bvirt) + (t1 - bvirt);
			u3 = _j + _i;
			bvirt = u3 - _j;
			bb[2] = _j - (u3 - bvirt) + (_i - bvirt);
			bb[3] = u3;
		}
		if (adxtail !== 0 || adytail !== 0 || bdxtail !== 0 || bdytail !== 0) {
			s1 = cdx * cdx;
			c = splitter * cdx;
			ahi = c - (c - cdx);
			alo = cdx - ahi;
			s0 = alo * alo - (s1 - ahi * ahi - (ahi + ahi) * alo);
			t1 = cdy * cdy;
			c = splitter * cdy;
			ahi = c - (c - cdy);
			alo = cdy - ahi;
			t0 = alo * alo - (t1 - ahi * ahi - (ahi + ahi) * alo);
			_i = s0 + t0;
			bvirt = _i - s0;
			cc[0] = s0 - (_i - bvirt) + (t0 - bvirt);
			_j = s1 + _i;
			bvirt = _j - s1;
			_0 = s1 - (_j - bvirt) + (_i - bvirt);
			_i = _0 + t1;
			bvirt = _i - _0;
			cc[1] = _0 - (_i - bvirt) + (t1 - bvirt);
			u3 = _j + _i;
			bvirt = u3 - _j;
			cc[2] = _j - (u3 - bvirt) + (_i - bvirt);
			cc[3] = u3;
		}
		if (adxtail !== 0) {
			axtbclen = scale(4, bc$1, adxtail, axtbc);
			finlen = finadd(finlen, sum_three(scale(axtbclen, axtbc, 2 * adx, _16$1), _16$1, scale(scale(4, cc, adxtail, _8$1), _8$1, bdy, _16b), _16b, scale(scale(4, bb, adxtail, _8$1), _8$1, -cdy, _16c), _16c, _32, _48$1), _48$1);
		}
		if (adytail !== 0) {
			aytbclen = scale(4, bc$1, adytail, aytbc);
			finlen = finadd(finlen, sum_three(scale(aytbclen, aytbc, 2 * ady, _16$1), _16$1, scale(scale(4, bb, adytail, _8$1), _8$1, cdx, _16b), _16b, scale(scale(4, cc, adytail, _8$1), _8$1, -bdx, _16c), _16c, _32, _48$1), _48$1);
		}
		if (bdxtail !== 0) {
			bxtcalen = scale(4, ca, bdxtail, bxtca);
			finlen = finadd(finlen, sum_three(scale(bxtcalen, bxtca, 2 * bdx, _16$1), _16$1, scale(scale(4, aa, bdxtail, _8$1), _8$1, cdy, _16b), _16b, scale(scale(4, cc, bdxtail, _8$1), _8$1, -ady, _16c), _16c, _32, _48$1), _48$1);
		}
		if (bdytail !== 0) {
			bytcalen = scale(4, ca, bdytail, bytca);
			finlen = finadd(finlen, sum_three(scale(bytcalen, bytca, 2 * bdy, _16$1), _16$1, scale(scale(4, cc, bdytail, _8$1), _8$1, adx, _16b), _16b, scale(scale(4, aa, bdytail, _8$1), _8$1, -cdx, _16c), _16c, _32, _48$1), _48$1);
		}
		if (cdxtail !== 0) {
			cxtablen = scale(4, ab$1, cdxtail, cxtab);
			finlen = finadd(finlen, sum_three(scale(cxtablen, cxtab, 2 * cdx, _16$1), _16$1, scale(scale(4, bb, cdxtail, _8$1), _8$1, ady, _16b), _16b, scale(scale(4, aa, cdxtail, _8$1), _8$1, -bdy, _16c), _16c, _32, _48$1), _48$1);
		}
		if (cdytail !== 0) {
			cytablen = scale(4, ab$1, cdytail, cytab);
			finlen = finadd(finlen, sum_three(scale(cytablen, cytab, 2 * cdy, _16$1), _16$1, scale(scale(4, aa, cdytail, _8$1), _8$1, bdx, _16b), _16b, scale(scale(4, bb, cdytail, _8$1), _8$1, -adx, _16c), _16c, _32, _48$1), _48$1);
		}
		if (adxtail !== 0 || adytail !== 0) {
			if (bdxtail !== 0 || bdytail !== 0 || cdxtail !== 0 || cdytail !== 0) {
				s1 = bdxtail * cdy;
				c = splitter * bdxtail;
				ahi = c - (c - bdxtail);
				alo = bdxtail - ahi;
				c = splitter * cdy;
				bhi = c - (c - cdy);
				blo = cdy - bhi;
				s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
				t1 = bdx * cdytail;
				c = splitter * bdx;
				ahi = c - (c - bdx);
				alo = bdx - ahi;
				c = splitter * cdytail;
				bhi = c - (c - cdytail);
				blo = cdytail - bhi;
				t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
				_i = s0 + t0;
				bvirt = _i - s0;
				u[0] = s0 - (_i - bvirt) + (t0 - bvirt);
				_j = s1 + _i;
				bvirt = _j - s1;
				_0 = s1 - (_j - bvirt) + (_i - bvirt);
				_i = _0 + t1;
				bvirt = _i - _0;
				u[1] = _0 - (_i - bvirt) + (t1 - bvirt);
				u3 = _j + _i;
				bvirt = u3 - _j;
				u[2] = _j - (u3 - bvirt) + (_i - bvirt);
				u[3] = u3;
				s1 = cdxtail * -bdy;
				c = splitter * cdxtail;
				ahi = c - (c - cdxtail);
				alo = cdxtail - ahi;
				c = splitter * -bdy;
				bhi = c - (c - -bdy);
				blo = -bdy - bhi;
				s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
				t1 = cdx * -bdytail;
				c = splitter * cdx;
				ahi = c - (c - cdx);
				alo = cdx - ahi;
				c = splitter * -bdytail;
				bhi = c - (c - -bdytail);
				blo = -bdytail - bhi;
				t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
				_i = s0 + t0;
				bvirt = _i - s0;
				v[0] = s0 - (_i - bvirt) + (t0 - bvirt);
				_j = s1 + _i;
				bvirt = _j - s1;
				_0 = s1 - (_j - bvirt) + (_i - bvirt);
				_i = _0 + t1;
				bvirt = _i - _0;
				v[1] = _0 - (_i - bvirt) + (t1 - bvirt);
				u3 = _j + _i;
				bvirt = u3 - _j;
				v[2] = _j - (u3 - bvirt) + (_i - bvirt);
				v[3] = u3;
				bctlen = sum(4, u, 4, v, bct);
				s1 = bdxtail * cdytail;
				c = splitter * bdxtail;
				ahi = c - (c - bdxtail);
				alo = bdxtail - ahi;
				c = splitter * cdytail;
				bhi = c - (c - cdytail);
				blo = cdytail - bhi;
				s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
				t1 = cdxtail * bdytail;
				c = splitter * cdxtail;
				ahi = c - (c - cdxtail);
				alo = cdxtail - ahi;
				c = splitter * bdytail;
				bhi = c - (c - bdytail);
				blo = bdytail - bhi;
				t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
				_i = s0 - t0;
				bvirt = s0 - _i;
				bctt[0] = s0 - (_i + bvirt) + (bvirt - t0);
				_j = s1 + _i;
				bvirt = _j - s1;
				_0 = s1 - (_j - bvirt) + (_i - bvirt);
				_i = _0 - t1;
				bvirt = _0 - _i;
				bctt[1] = _0 - (_i + bvirt) + (bvirt - t1);
				u3 = _j + _i;
				bvirt = u3 - _j;
				bctt[2] = _j - (u3 - bvirt) + (_i - bvirt);
				bctt[3] = u3;
				bcttlen = 4;
			} else {
				bct[0] = 0;
				bctlen = 1;
				bctt[0] = 0;
				bcttlen = 1;
			}
			if (adxtail !== 0) {
				const len = scale(bctlen, bct, adxtail, _16c);
				finlen = finadd(finlen, sum(scale(axtbclen, axtbc, adxtail, _16$1), _16$1, scale(len, _16c, 2 * adx, _32), _32, _48$1), _48$1);
				const len2 = scale(bcttlen, bctt, adxtail, _8$1);
				finlen = finadd(finlen, sum_three(scale(len2, _8$1, 2 * adx, _16$1), _16$1, scale(len2, _8$1, adxtail, _16b), _16b, scale(len, _16c, adxtail, _32), _32, _32b, _64), _64);
				if (bdytail !== 0) finlen = finadd(finlen, scale(scale(4, cc, adxtail, _8$1), _8$1, bdytail, _16$1), _16$1);
				if (cdytail !== 0) finlen = finadd(finlen, scale(scale(4, bb, -adxtail, _8$1), _8$1, cdytail, _16$1), _16$1);
			}
			if (adytail !== 0) {
				const len = scale(bctlen, bct, adytail, _16c);
				finlen = finadd(finlen, sum(scale(aytbclen, aytbc, adytail, _16$1), _16$1, scale(len, _16c, 2 * ady, _32), _32, _48$1), _48$1);
				const len2 = scale(bcttlen, bctt, adytail, _8$1);
				finlen = finadd(finlen, sum_three(scale(len2, _8$1, 2 * ady, _16$1), _16$1, scale(len2, _8$1, adytail, _16b), _16b, scale(len, _16c, adytail, _32), _32, _32b, _64), _64);
			}
		}
		if (bdxtail !== 0 || bdytail !== 0) {
			if (cdxtail !== 0 || cdytail !== 0 || adxtail !== 0 || adytail !== 0) {
				s1 = cdxtail * ady;
				c = splitter * cdxtail;
				ahi = c - (c - cdxtail);
				alo = cdxtail - ahi;
				c = splitter * ady;
				bhi = c - (c - ady);
				blo = ady - bhi;
				s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
				t1 = cdx * adytail;
				c = splitter * cdx;
				ahi = c - (c - cdx);
				alo = cdx - ahi;
				c = splitter * adytail;
				bhi = c - (c - adytail);
				blo = adytail - bhi;
				t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
				_i = s0 + t0;
				bvirt = _i - s0;
				u[0] = s0 - (_i - bvirt) + (t0 - bvirt);
				_j = s1 + _i;
				bvirt = _j - s1;
				_0 = s1 - (_j - bvirt) + (_i - bvirt);
				_i = _0 + t1;
				bvirt = _i - _0;
				u[1] = _0 - (_i - bvirt) + (t1 - bvirt);
				u3 = _j + _i;
				bvirt = u3 - _j;
				u[2] = _j - (u3 - bvirt) + (_i - bvirt);
				u[3] = u3;
				n1 = -cdy;
				n0 = -cdytail;
				s1 = adxtail * n1;
				c = splitter * adxtail;
				ahi = c - (c - adxtail);
				alo = adxtail - ahi;
				c = splitter * n1;
				bhi = c - (c - n1);
				blo = n1 - bhi;
				s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
				t1 = adx * n0;
				c = splitter * adx;
				ahi = c - (c - adx);
				alo = adx - ahi;
				c = splitter * n0;
				bhi = c - (c - n0);
				blo = n0 - bhi;
				t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
				_i = s0 + t0;
				bvirt = _i - s0;
				v[0] = s0 - (_i - bvirt) + (t0 - bvirt);
				_j = s1 + _i;
				bvirt = _j - s1;
				_0 = s1 - (_j - bvirt) + (_i - bvirt);
				_i = _0 + t1;
				bvirt = _i - _0;
				v[1] = _0 - (_i - bvirt) + (t1 - bvirt);
				u3 = _j + _i;
				bvirt = u3 - _j;
				v[2] = _j - (u3 - bvirt) + (_i - bvirt);
				v[3] = u3;
				catlen = sum(4, u, 4, v, cat);
				s1 = cdxtail * adytail;
				c = splitter * cdxtail;
				ahi = c - (c - cdxtail);
				alo = cdxtail - ahi;
				c = splitter * adytail;
				bhi = c - (c - adytail);
				blo = adytail - bhi;
				s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
				t1 = adxtail * cdytail;
				c = splitter * adxtail;
				ahi = c - (c - adxtail);
				alo = adxtail - ahi;
				c = splitter * cdytail;
				bhi = c - (c - cdytail);
				blo = cdytail - bhi;
				t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
				_i = s0 - t0;
				bvirt = s0 - _i;
				catt[0] = s0 - (_i + bvirt) + (bvirt - t0);
				_j = s1 + _i;
				bvirt = _j - s1;
				_0 = s1 - (_j - bvirt) + (_i - bvirt);
				_i = _0 - t1;
				bvirt = _0 - _i;
				catt[1] = _0 - (_i + bvirt) + (bvirt - t1);
				u3 = _j + _i;
				bvirt = u3 - _j;
				catt[2] = _j - (u3 - bvirt) + (_i - bvirt);
				catt[3] = u3;
				cattlen = 4;
			} else {
				cat[0] = 0;
				catlen = 1;
				catt[0] = 0;
				cattlen = 1;
			}
			if (bdxtail !== 0) {
				const len = scale(catlen, cat, bdxtail, _16c);
				finlen = finadd(finlen, sum(scale(bxtcalen, bxtca, bdxtail, _16$1), _16$1, scale(len, _16c, 2 * bdx, _32), _32, _48$1), _48$1);
				const len2 = scale(cattlen, catt, bdxtail, _8$1);
				finlen = finadd(finlen, sum_three(scale(len2, _8$1, 2 * bdx, _16$1), _16$1, scale(len2, _8$1, bdxtail, _16b), _16b, scale(len, _16c, bdxtail, _32), _32, _32b, _64), _64);
				if (cdytail !== 0) finlen = finadd(finlen, scale(scale(4, aa, bdxtail, _8$1), _8$1, cdytail, _16$1), _16$1);
				if (adytail !== 0) finlen = finadd(finlen, scale(scale(4, cc, -bdxtail, _8$1), _8$1, adytail, _16$1), _16$1);
			}
			if (bdytail !== 0) {
				const len = scale(catlen, cat, bdytail, _16c);
				finlen = finadd(finlen, sum(scale(bytcalen, bytca, bdytail, _16$1), _16$1, scale(len, _16c, 2 * bdy, _32), _32, _48$1), _48$1);
				const len2 = scale(cattlen, catt, bdytail, _8$1);
				finlen = finadd(finlen, sum_three(scale(len2, _8$1, 2 * bdy, _16$1), _16$1, scale(len2, _8$1, bdytail, _16b), _16b, scale(len, _16c, bdytail, _32), _32, _32b, _64), _64);
			}
		}
		if (cdxtail !== 0 || cdytail !== 0) {
			if (adxtail !== 0 || adytail !== 0 || bdxtail !== 0 || bdytail !== 0) {
				s1 = adxtail * bdy;
				c = splitter * adxtail;
				ahi = c - (c - adxtail);
				alo = adxtail - ahi;
				c = splitter * bdy;
				bhi = c - (c - bdy);
				blo = bdy - bhi;
				s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
				t1 = adx * bdytail;
				c = splitter * adx;
				ahi = c - (c - adx);
				alo = adx - ahi;
				c = splitter * bdytail;
				bhi = c - (c - bdytail);
				blo = bdytail - bhi;
				t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
				_i = s0 + t0;
				bvirt = _i - s0;
				u[0] = s0 - (_i - bvirt) + (t0 - bvirt);
				_j = s1 + _i;
				bvirt = _j - s1;
				_0 = s1 - (_j - bvirt) + (_i - bvirt);
				_i = _0 + t1;
				bvirt = _i - _0;
				u[1] = _0 - (_i - bvirt) + (t1 - bvirt);
				u3 = _j + _i;
				bvirt = u3 - _j;
				u[2] = _j - (u3 - bvirt) + (_i - bvirt);
				u[3] = u3;
				n1 = -ady;
				n0 = -adytail;
				s1 = bdxtail * n1;
				c = splitter * bdxtail;
				ahi = c - (c - bdxtail);
				alo = bdxtail - ahi;
				c = splitter * n1;
				bhi = c - (c - n1);
				blo = n1 - bhi;
				s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
				t1 = bdx * n0;
				c = splitter * bdx;
				ahi = c - (c - bdx);
				alo = bdx - ahi;
				c = splitter * n0;
				bhi = c - (c - n0);
				blo = n0 - bhi;
				t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
				_i = s0 + t0;
				bvirt = _i - s0;
				v[0] = s0 - (_i - bvirt) + (t0 - bvirt);
				_j = s1 + _i;
				bvirt = _j - s1;
				_0 = s1 - (_j - bvirt) + (_i - bvirt);
				_i = _0 + t1;
				bvirt = _i - _0;
				v[1] = _0 - (_i - bvirt) + (t1 - bvirt);
				u3 = _j + _i;
				bvirt = u3 - _j;
				v[2] = _j - (u3 - bvirt) + (_i - bvirt);
				v[3] = u3;
				abtlen = sum(4, u, 4, v, abt);
				s1 = adxtail * bdytail;
				c = splitter * adxtail;
				ahi = c - (c - adxtail);
				alo = adxtail - ahi;
				c = splitter * bdytail;
				bhi = c - (c - bdytail);
				blo = bdytail - bhi;
				s0 = alo * blo - (s1 - ahi * bhi - alo * bhi - ahi * blo);
				t1 = bdxtail * adytail;
				c = splitter * bdxtail;
				ahi = c - (c - bdxtail);
				alo = bdxtail - ahi;
				c = splitter * adytail;
				bhi = c - (c - adytail);
				blo = adytail - bhi;
				t0 = alo * blo - (t1 - ahi * bhi - alo * bhi - ahi * blo);
				_i = s0 - t0;
				bvirt = s0 - _i;
				abtt[0] = s0 - (_i + bvirt) + (bvirt - t0);
				_j = s1 + _i;
				bvirt = _j - s1;
				_0 = s1 - (_j - bvirt) + (_i - bvirt);
				_i = _0 - t1;
				bvirt = _0 - _i;
				abtt[1] = _0 - (_i + bvirt) + (bvirt - t1);
				u3 = _j + _i;
				bvirt = u3 - _j;
				abtt[2] = _j - (u3 - bvirt) + (_i - bvirt);
				abtt[3] = u3;
				abttlen = 4;
			} else {
				abt[0] = 0;
				abtlen = 1;
				abtt[0] = 0;
				abttlen = 1;
			}
			if (cdxtail !== 0) {
				const len = scale(abtlen, abt, cdxtail, _16c);
				finlen = finadd(finlen, sum(scale(cxtablen, cxtab, cdxtail, _16$1), _16$1, scale(len, _16c, 2 * cdx, _32), _32, _48$1), _48$1);
				const len2 = scale(abttlen, abtt, cdxtail, _8$1);
				finlen = finadd(finlen, sum_three(scale(len2, _8$1, 2 * cdx, _16$1), _16$1, scale(len2, _8$1, cdxtail, _16b), _16b, scale(len, _16c, cdxtail, _32), _32, _32b, _64), _64);
				if (adytail !== 0) finlen = finadd(finlen, scale(scale(4, bb, cdxtail, _8$1), _8$1, adytail, _16$1), _16$1);
				if (bdytail !== 0) finlen = finadd(finlen, scale(scale(4, aa, -cdxtail, _8$1), _8$1, bdytail, _16$1), _16$1);
			}
			if (cdytail !== 0) {
				const len = scale(abtlen, abt, cdytail, _16c);
				finlen = finadd(finlen, sum(scale(cytablen, cytab, cdytail, _16$1), _16$1, scale(len, _16c, 2 * cdy, _32), _32, _48$1), _48$1);
				const len2 = scale(abttlen, abtt, cdytail, _8$1);
				finlen = finadd(finlen, sum_three(scale(len2, _8$1, 2 * cdy, _16$1), _16$1, scale(len2, _8$1, cdytail, _16b), _16b, scale(len, _16c, cdytail, _32), _32, _32b, _64), _64);
			}
		}
		return fin$1[finlen - 1];
	}
	function incircle(ax, ay, bx, by, cx, cy, dx, dy) {
		const adx = ax - dx;
		const bdx = bx - dx;
		const cdx = cx - dx;
		const ady = ay - dy;
		const bdy = by - dy;
		const cdy = cy - dy;
		const bdxcdy = bdx * cdy;
		const cdxbdy = cdx * bdy;
		const alift = adx * adx + ady * ady;
		const cdxady = cdx * ady;
		const adxcdy = adx * cdy;
		const blift = bdx * bdx + bdy * bdy;
		const adxbdy = adx * bdy;
		const bdxady = bdx * ady;
		const clift = cdx * cdx + cdy * cdy;
		const det = alift * (bdxcdy - cdxbdy) + blift * (cdxady - adxcdy) + clift * (adxbdy - bdxady);
		const permanent = (Math.abs(bdxcdy) + Math.abs(cdxbdy)) * alift + (Math.abs(cdxady) + Math.abs(adxcdy)) * blift + (Math.abs(adxbdy) + Math.abs(bdxady)) * clift;
		const errbound = iccerrboundA * permanent;
		if (det > errbound || -det > errbound) return det;
		return incircleadapt(ax, ay, bx, by, cx, cy, dx, dy, permanent);
	}
	vec(4);
	vec(4);
	vec(4);
	vec(4);
	vec(4);
	vec(4);
	vec(4);
	vec(4);
	vec(4);
	vec(4);
	vec(24);
	vec(24);
	vec(24);
	vec(24);
	vec(24);
	vec(24);
	vec(24);
	vec(24);
	vec(24);
	vec(24);
	vec(1152);
	vec(1152);
	vec(1152);
	vec(1152);
	vec(1152);
	vec(2304);
	vec(2304);
	vec(3456);
	vec(5760);
	vec(8);
	vec(8);
	vec(8);
	vec(16);
	vec(24);
	vec(48);
	vec(48);
	vec(96);
	vec(192);
	vec(384);
	vec(384);
	vec(384);
	vec(768);
	vec(96);
	vec(96);
	vec(96);
	vec(1152);
	//#endregion
	//#region node_modules/delaunator/index.js
	const EPSILON = Math.pow(2, -52);
	const EDGE_STACK = /* @__PURE__ */ new Uint32Array(512);
	/** @template {ArrayLike<number>} T */
	var Delaunator = class Delaunator {
		/**
		* Constructs a delaunay triangulation object given an array of points (`[x, y]` by default).
		* `getX` and `getY` are optional functions of the form `(point) => value` for custom point formats.
		*
		* @template P
		* @param {P[]} points
		* @param {(p: P) => number} [getX]
		* @param {(p: P) => number} [getY]
		*/
		static from(points, getX = defaultGetX, getY = defaultGetY) {
			const n = points.length;
			const coords = new Float64Array(n * 2);
			for (let i = 0; i < n; i++) {
				const p = points[i];
				coords[2 * i] = getX(p);
				coords[2 * i + 1] = getY(p);
			}
			return new Delaunator(coords);
		}
		/**
		* Constructs a delaunay triangulation object given an array of point coordinates of the form:
		* `[x0, y0, x1, y1, ...]` (use a typed array for best performance). Duplicate points are skipped.
		*
		* @param {T} coords
		*/
		constructor(coords) {
			const n = coords.length >> 1;
			if (n > 0 && typeof coords[0] !== "number") throw new Error("Expected coords to contain numbers.");
			this.coords = coords;
			const maxTriangles = Math.max(2 * n - 5, 0);
			/** @private */ this._triangles = new Uint32Array(maxTriangles * 3);
			/** @private */ this._halfedges = new Int32Array(maxTriangles * 3);
			/** @private */ this._hashSize = Math.ceil(Math.sqrt(n));
			/** @private */ this._hullPrev = new Uint32Array(n);
			/** @private */ this._hullNext = new Uint32Array(n);
			/** @private */ this._hullTri = new Uint32Array(n);
			/** @private */ this._hullHash = new Int32Array(this._hashSize);
			/** @private */ this._ids = new Uint32Array(n);
			/** @private */ this._dists = new Float64Array(n);
			/** @private */ this.trianglesLen = 0;
			/** @private */ this._cx = 0;
			/** @private */ this._cy = 0;
			/** @private */ this._hullStart = 0;
			/** A `Uint32Array` array of indices that reference points on the convex hull of the input data, counter-clockwise. */
			this.hull = this._triangles;
			/** A `Uint32Array` array of triangle vertex indices (each group of three numbers forms a triangle). All triangles are directed counterclockwise. */
			this.triangles = this._triangles;
			/**
			* A `Int32Array` array of triangle half-edge indices that allows you to traverse the triangulation.
			* `i`-th half-edge in the array corresponds to vertex `triangles[i]` the half-edge is coming from.
			* `halfedges[i]` is the index of a twin half-edge in an adjacent triangle (or `-1` for outer half-edges on the convex hull).
			*/
			this.halfedges = this._halfedges;
			this.update();
		}
		/**
		* Updates the triangulation if you modified `delaunay.coords` values in place, avoiding expensive memory allocations.
		* Useful for iterative relaxation algorithms such as Lloyd's.
		*/
		update() {
			const { coords, _hullPrev: hullPrev, _hullNext: hullNext, _hullTri: hullTri, _hullHash: hullHash } = this;
			const n = coords.length >> 1;
			let minX = Infinity;
			let minY = Infinity;
			let maxX = -Infinity;
			let maxY = -Infinity;
			for (let i = 0; i < n; i++) {
				const x = coords[2 * i];
				const y = coords[2 * i + 1];
				if (x < minX) minX = x;
				if (y < minY) minY = y;
				if (x > maxX) maxX = x;
				if (y > maxY) maxY = y;
				this._ids[i] = i;
			}
			const cx = (minX + maxX) / 2;
			const cy = (minY + maxY) / 2;
			let i0 = 0, i1 = 0, i2 = 0;
			for (let i = 0, minDist = Infinity; i < n; i++) {
				const d = dist(cx, cy, coords[2 * i], coords[2 * i + 1]);
				if (d < minDist) {
					i0 = i;
					minDist = d;
				}
			}
			const i0x = coords[2 * i0];
			const i0y = coords[2 * i0 + 1];
			for (let i = 0, minDist = Infinity; i < n; i++) {
				if (i === i0) continue;
				const d = dist(i0x, i0y, coords[2 * i], coords[2 * i + 1]);
				if (d < minDist && d > 0) {
					i1 = i;
					minDist = d;
				}
			}
			let i1x = coords[2 * i1];
			let i1y = coords[2 * i1 + 1];
			let minRadius = Infinity;
			for (let i = 0; i < n; i++) {
				if (i === i0 || i === i1) continue;
				const r = circumradius(i0x, i0y, i1x, i1y, coords[2 * i], coords[2 * i + 1]);
				if (r < minRadius) {
					i2 = i;
					minRadius = r;
				}
			}
			let i2x = coords[2 * i2];
			let i2y = coords[2 * i2 + 1];
			if (minRadius === Infinity) {
				for (let i = 0; i < n; i++) this._dists[i] = coords[2 * i] - coords[0] || coords[2 * i + 1] - coords[1];
				quicksort(this._ids, this._dists, 0, n - 1);
				const hull = new Uint32Array(n);
				let j = 0;
				for (let i = 0, d0 = -Infinity; i < n; i++) {
					const id = this._ids[i];
					const d = this._dists[id];
					if (d > d0) {
						hull[j++] = id;
						d0 = d;
					}
				}
				this.hull = hull.subarray(0, j);
				this.triangles = /* @__PURE__ */ new Uint32Array(0);
				this.halfedges = /* @__PURE__ */ new Int32Array(0);
				return;
			}
			if (orient2d(i0x, i0y, i1x, i1y, i2x, i2y) < 0) {
				const i = i1;
				const x = i1x;
				const y = i1y;
				i1 = i2;
				i1x = i2x;
				i1y = i2y;
				i2 = i;
				i2x = x;
				i2y = y;
			}
			const center = circumcenter(i0x, i0y, i1x, i1y, i2x, i2y);
			this._cx = center.x;
			this._cy = center.y;
			for (let i = 0; i < n; i++) this._dists[i] = dist(coords[2 * i], coords[2 * i + 1], center.x, center.y);
			quicksort(this._ids, this._dists, 0, n - 1);
			this._hullStart = i0;
			let hullSize = 3;
			hullNext[i0] = hullPrev[i2] = i1;
			hullNext[i1] = hullPrev[i0] = i2;
			hullNext[i2] = hullPrev[i1] = i0;
			hullTri[i0] = 0;
			hullTri[i1] = 1;
			hullTri[i2] = 2;
			hullHash.fill(-1);
			hullHash[this._hashKey(i0x, i0y)] = i0;
			hullHash[this._hashKey(i1x, i1y)] = i1;
			hullHash[this._hashKey(i2x, i2y)] = i2;
			this.trianglesLen = 0;
			this._addTriangle(i0, i1, i2, -1, -1, -1);
			for (let k = 0, xp = 0, yp = 0; k < this._ids.length; k++) {
				const i = this._ids[k];
				const x = coords[2 * i];
				const y = coords[2 * i + 1];
				if (k > 0 && Math.abs(x - xp) <= EPSILON && Math.abs(y - yp) <= EPSILON) continue;
				xp = x;
				yp = y;
				if (i === i0 || i === i1 || i === i2) continue;
				let start = 0;
				for (let j = 0, key = this._hashKey(x, y); j < this._hashSize; j++) {
					start = hullHash[(key + j) % this._hashSize];
					if (start !== -1 && start !== hullNext[start]) break;
				}
				start = hullPrev[start];
				let e = start, q;
				while (q = hullNext[e], orient2d(x, y, coords[2 * e], coords[2 * e + 1], coords[2 * q], coords[2 * q + 1]) >= 0) {
					e = q;
					if (e === start) {
						e = -1;
						break;
					}
				}
				if (e === -1) continue;
				let t = this._addTriangle(e, i, hullNext[e], -1, -1, hullTri[e]);
				hullTri[i] = this._legalize(t + 2);
				hullTri[e] = t;
				hullSize++;
				let n = hullNext[e];
				while (q = hullNext[n], orient2d(x, y, coords[2 * n], coords[2 * n + 1], coords[2 * q], coords[2 * q + 1]) < 0) {
					t = this._addTriangle(n, i, q, hullTri[i], -1, hullTri[n]);
					hullTri[i] = this._legalize(t + 2);
					hullNext[n] = n;
					hullSize--;
					n = q;
				}
				if (e === start) while (q = hullPrev[e], orient2d(x, y, coords[2 * q], coords[2 * q + 1], coords[2 * e], coords[2 * e + 1]) < 0) {
					t = this._addTriangle(q, i, e, -1, hullTri[e], hullTri[q]);
					this._legalize(t + 2);
					hullTri[q] = t;
					hullNext[e] = e;
					hullSize--;
					e = q;
				}
				this._hullStart = hullPrev[i] = e;
				hullNext[e] = hullPrev[n] = i;
				hullNext[i] = n;
				hullHash[this._hashKey(x, y)] = i;
				hullHash[this._hashKey(coords[2 * e], coords[2 * e + 1])] = e;
			}
			this.hull = new Uint32Array(hullSize);
			for (let i = 0, e = this._hullStart; i < hullSize; i++) {
				this.hull[i] = e;
				e = hullNext[e];
			}
			this.triangles = this._triangles.subarray(0, this.trianglesLen);
			this.halfedges = this._halfedges.subarray(0, this.trianglesLen);
		}
		/**
		* Calculate an angle-based key for the edge hash used for advancing convex hull.
		*
		* @param {number} x
		* @param {number} y
		* @private
		*/
		_hashKey(x, y) {
			return Math.floor(pseudoAngle(x - this._cx, y - this._cy) * this._hashSize) % this._hashSize;
		}
		/**
		* Flip an edge in a pair of triangles if it doesn't satisfy the Delaunay condition.
		*
		* @param {number} a
		* @private
		*/
		_legalize(a) {
			const { _triangles: triangles, _halfedges: halfedges, coords } = this;
			let i = 0;
			let ar = 0;
			while (true) {
				const b = halfedges[a];
				const a0 = a - a % 3;
				ar = a0 + (a + 2) % 3;
				if (b === -1) {
					if (i === 0) break;
					a = EDGE_STACK[--i];
					continue;
				}
				const b0 = b - b % 3;
				const al = a0 + (a + 1) % 3;
				const bl = b0 + (b + 2) % 3;
				const p0 = triangles[ar];
				const pr = triangles[a];
				const pl = triangles[al];
				const p1 = triangles[bl];
				if (inCircle(coords[2 * p0], coords[2 * p0 + 1], coords[2 * pr], coords[2 * pr + 1], coords[2 * pl], coords[2 * pl + 1], coords[2 * p1], coords[2 * p1 + 1])) {
					triangles[a] = p1;
					triangles[b] = p0;
					const hbl = halfedges[bl];
					if (hbl === -1) {
						let e = this._hullStart;
						do {
							if (this._hullTri[e] === bl) {
								this._hullTri[e] = a;
								break;
							}
							e = this._hullPrev[e];
						} while (e !== this._hullStart);
					}
					this._link(a, hbl);
					this._link(b, halfedges[ar]);
					this._link(ar, bl);
					const br = b0 + (b + 1) % 3;
					if (i < EDGE_STACK.length) EDGE_STACK[i++] = br;
				} else {
					if (i === 0) break;
					a = EDGE_STACK[--i];
				}
			}
			return ar;
		}
		/**
		* Link two half-edges to each other.
		* @param {number} a
		* @param {number} b
		* @private
		*/
		_link(a, b) {
			this._halfedges[a] = b;
			if (b !== -1) this._halfedges[b] = a;
		}
		/**
		* Add a new triangle given vertex indices and adjacent half-edge ids.
		*
		* @param {number} i0
		* @param {number} i1
		* @param {number} i2
		* @param {number} a
		* @param {number} b
		* @param {number} c
		* @private
		*/
		_addTriangle(i0, i1, i2, a, b, c) {
			const t = this.trianglesLen;
			this._triangles[t] = i0;
			this._triangles[t + 1] = i1;
			this._triangles[t + 2] = i2;
			this._link(t, a);
			this._link(t + 1, b);
			this._link(t + 2, c);
			this.trianglesLen += 3;
			return t;
		}
	};
	/**
	* Monotonically increases with real angle, but doesn't need expensive trigonometry.
	*
	* @param {number} dx
	* @param {number} dy
	*/
	function pseudoAngle(dx, dy) {
		const p = dx / (Math.abs(dx) + Math.abs(dy));
		return (dy > 0 ? 3 - p : 1 + p) / 4;
	}
	/**
	* Squared distance between two points.
	*
	* @param {number} ax
	* @param {number} ay
	* @param {number} bx
	* @param {number} by
	*/
	function dist(ax, ay, bx, by) {
		const dx = ax - bx;
		const dy = ay - by;
		return dx * dx + dy * dy;
	}
	/**
	* Check whether point P is inside a circle formed by points A, B, C.
	*
	* @param {number} ax
	* @param {number} ay
	* @param {number} bx
	* @param {number} by
	* @param {number} cx
	* @param {number} cy
	* @param {number} px
	* @param {number} py
	*/
	function inCircle(ax, ay, bx, by, cx, cy, px, py) {
		const dx = ax - px;
		const dy = ay - py;
		const ex = bx - px;
		const ey = by - py;
		const fx = cx - px;
		const fy = cy - py;
		const ap = dx * dx + dy * dy;
		const bp = ex * ex + ey * ey;
		const cp = fx * fx + fy * fy;
		return dx * (ey * cp - bp * fy) - dy * (ex * cp - bp * fx) + ap * (ex * fy - ey * fx) < 0;
	}
	/**
	* Squared radius of the circle formed by points A, B, C.
	*
	* @param {number} ax
	* @param {number} ay
	* @param {number} bx
	* @param {number} by
	* @param {number} cx
	* @param {number} cy
	*/
	function circumradius(ax, ay, bx, by, cx, cy) {
		const dx = bx - ax;
		const dy = by - ay;
		const ex = cx - ax;
		const ey = cy - ay;
		const bl = dx * dx + dy * dy;
		const cl = ex * ex + ey * ey;
		const d = .5 / (dx * ey - dy * ex);
		const x = (ey * bl - dy * cl) * d;
		const y = (dx * cl - ex * bl) * d;
		return x * x + y * y;
	}
	/**
	* Get coordinates of a circumcenter for points A, B, C.
	*
	* @param {number} ax
	* @param {number} ay
	* @param {number} bx
	* @param {number} by
	* @param {number} cx
	* @param {number} cy
	*/
	function circumcenter(ax, ay, bx, by, cx, cy) {
		const dx = bx - ax;
		const dy = by - ay;
		const ex = cx - ax;
		const ey = cy - ay;
		const bl = dx * dx + dy * dy;
		const cl = ex * ex + ey * ey;
		const d = .5 / (dx * ey - dy * ex);
		return {
			x: ax + (ey * bl - dy * cl) * d,
			y: ay + (dx * cl - ex * bl) * d
		};
	}
	/**
	* Sort points by distance via an array of point indices and an array of calculated distances.
	*
	* @param {Uint32Array} ids
	* @param {Float64Array} dists
	* @param {number} left
	* @param {number} right
	*/
	function quicksort(ids, dists, left, right) {
		if (right - left <= 20) for (let i = left + 1; i <= right; i++) {
			const temp = ids[i];
			const tempDist = dists[temp];
			let j = i - 1;
			while (j >= left && dists[ids[j]] > tempDist) ids[j + 1] = ids[j--];
			ids[j + 1] = temp;
		}
		else {
			const median = left + right >> 1;
			let i = left + 1;
			let j = right;
			swap(ids, median, i);
			if (dists[ids[left]] > dists[ids[right]]) swap(ids, left, right);
			if (dists[ids[i]] > dists[ids[right]]) swap(ids, i, right);
			if (dists[ids[left]] > dists[ids[i]]) swap(ids, left, i);
			const temp = ids[i];
			const tempDist = dists[temp];
			while (true) {
				do
					i++;
				while (dists[ids[i]] < tempDist);
				do
					j--;
				while (dists[ids[j]] > tempDist);
				if (j < i) break;
				swap(ids, i, j);
			}
			ids[left + 1] = ids[j];
			ids[j] = temp;
			if (right - i + 1 >= j - left) {
				quicksort(ids, dists, i, right);
				quicksort(ids, dists, left, j - 1);
			} else {
				quicksort(ids, dists, left, j - 1);
				quicksort(ids, dists, i, right);
			}
		}
	}
	/**
	* @param {Uint32Array} arr
	* @param {number} i
	* @param {number} j
	*/
	function swap(arr, i, j) {
		const tmp = arr[i];
		arr[i] = arr[j];
		arr[j] = tmp;
	}
	/** @param {[number, number]} p */
	function defaultGetX(p) {
		return p[0];
	}
	/** @param {[number, number]} p */
	function defaultGetY(p) {
		return p[1];
	}
	//#endregion
	//#region node_modules/@kninnug/constrainautor/lib/Constrainautor.mjs
	/**
	* A set of numbers, stored as bits in a typed array. The amount of numbers /
	* the maximum number that can be stored is limited by the length, which is
	* fixed at construction time.
	*/
	var BitSet = class {
		constructor(W, bs) {
			this.W = W;
			this.bs = bs;
		}
		/**
		* Add a number to the set.
		*
		* @param idx The number to add. Must be 0 <= idx < len.
		* @return this.
		*/
		add(idx) {
			const W = this.W;
			const byte = idx / W | 0;
			const bit = idx % W;
			this.bs[byte] |= 1 << bit;
			return this;
		}
		/**
		* Delete a number from the set.
		*
		* @param idx The number to delete. Must be 0 <= idx < len.
		* @return this.
		*/
		delete(idx) {
			const W = this.W;
			const byte = idx / W | 0;
			const bit = idx % W;
			this.bs[byte] &= ~(1 << bit);
			return this;
		}
		/**
		* Add or delete a number in the set, depending on the second argument.
		*
		* @param idx The number to add or delete. Must be 0 <= idx < len.
		* @param val If true, add the number, otherwise delete.
		* @return val.
		*/
		set(idx, val) {
			const W = this.W;
			const byte = idx / W | 0;
			const m = 1 << idx % W;
			this.bs[byte] ^= (-val ^ this.bs[byte]) & m;
			return val;
		}
		/**
		* Whether the number is in the set.
		*
		* @param idx The number to test. Must be 0 <= idx < len.
		* @return True if the number is in the set.
		*/
		has(idx) {
			const W = this.W;
			const byte = idx / W | 0;
			const bit = idx % W;
			return !!(this.bs[byte] & 1 << bit);
		}
		/**
		* Iterate over the numbers that are in the set. The callback is invoked
		* with each number that is set. It is allowed to change the BitSet during
		* iteration. If it deletes a number that has not been iterated over, that
		* number will not show up in a later call. If it adds a number during
		* iteration, that number may or may not show up in a later call.
		*
		* @param fn The function to call for each number.
		* @return this.
		*/
		forEach(fn) {
			const W = this.W;
			const bs = this.bs;
			const len = bs.length;
			for (let byte = 0; byte < len; byte++) {
				let bit = 0;
				while (bs[byte] && bit < W) {
					if (bs[byte] & 1 << bit) fn(byte * W + bit);
					bit++;
				}
			}
			return this;
		}
	};
	/**
	* A bit set using 8 bits per cell.
	*/
	var BitSet8 = class extends BitSet {
		/**
		* Create a bit set.
		*
		* @param len The length of the bit set, limiting the maximum value that
		*        can be stored in it to len - 1.
		*/
		constructor(len) {
			const W = 8;
			const bs = new Uint8Array(Math.ceil(len / W)).fill(0);
			super(W, bs);
		}
	};
	function nextEdge(e) {
		return e % 3 === 2 ? e - 2 : e + 1;
	}
	function prevEdge(e) {
		return e % 3 === 0 ? e + 2 : e - 1;
	}
	const U32NIL = 2 ** 32 - 1;
	/**
	* Constrain a triangulation from Delaunator, using (parts of) the algorithm
	* in "A fast algorithm for generating constrained Delaunay triangulations" by
	* S. W. Sloan.
	*/
	var Constrainautor = class {
		/**
		* Make a Constrainautor.
		*
		* @param del The triangulation output from Delaunator.
		* @param edges If provided, constrain these edges as by constrainAll.
		*/
		constructor(del, edges) {
			if (!del || typeof del !== "object" || !del.triangles || !del.halfedges || !del.coords) throw new Error("Expected an object with Delaunator output");
			if (del.triangles.length % 3 || del.halfedges.length !== del.triangles.length || del.coords.length % 2) throw new Error("Delaunator output appears inconsistent");
			if (del.triangles.length < 3) throw new Error("No edges in triangulation");
			this.del = del;
			const numPoints = del.coords.length >> 1;
			const numEdges = del.triangles.length;
			this.vertMap = new Uint32Array(numPoints).fill(U32NIL);
			this.flips = new BitSet8(numEdges);
			this.consd = new BitSet8(numEdges);
			const triangles = del.triangles;
			const vm = this.vertMap;
			for (let e = 0; e < numEdges; e++) if (vm[triangles[e]] === U32NIL) this.updateVert(e);
			if (edges) this.constrainAll(edges);
		}
		/**
		* Constrain the triangulation such that there is an edge between p1 and p2.
		*
		* @param segP1 The index of one segment end-point in the coords array.
		* @param segP2 The index of the other segment end-point in the coords array.
		* @return The id of the edge that points from p1 to p2. If the
		*         constrained edge lies on the hull and points in the opposite
		*         direction (p2 to p1), the negative of its id is returned.
		*/
		constrainOne(segP1, segP2) {
			const { triangles, halfedges } = this.del;
			const vm = this.vertMap;
			const consd = this.consd;
			const start = vm[segP1];
			if (start === U32NIL || vm[segP2] === U32NIL) throw new Error(`Cannot constrain between points that are not triangulated`);
			let edg = start;
			do {
				const p4 = triangles[edg];
				const nxt = nextEdge(edg);
				if (p4 === segP2) return this.protect(edg);
				const opp = prevEdge(edg);
				const p3 = triangles[opp];
				if (p3 === segP2) {
					this.protect(nxt);
					return nxt;
				}
				if (this.intersectSegments(segP1, segP2, p3, p4)) {
					edg = opp;
					break;
				}
				edg = halfedges[nxt];
			} while (edg !== -1 && edg !== start);
			let conEdge = edg;
			let rescan = -1;
			while (edg !== -1) {
				const adj = halfedges[edg];
				const bot = prevEdge(edg);
				const top = prevEdge(adj);
				const rgt = nextEdge(adj);
				if (adj === -1) throw new Error("Constraining edge exited the hull");
				if (consd.has(edg)) throw new Error("Edge intersects already constrained edge");
				if (this.isCollinear(segP1, segP2, triangles[edg]) || this.isCollinear(segP1, segP2, triangles[adj])) throw new Error("Constraining edge intersects point");
				if (!this.intersectSegments(triangles[edg], triangles[adj], triangles[bot], triangles[top])) {
					if (rescan === -1) rescan = edg;
					if (triangles[top] === segP2) {
						if (edg === rescan) throw new Error("Infinite loop: non-convex quadrilateral");
						edg = rescan;
						rescan = -1;
						continue;
					}
					if (this.intersectSegments(segP1, segP2, triangles[top], triangles[adj])) edg = top;
					else if (this.intersectSegments(segP1, segP2, triangles[rgt], triangles[top])) edg = rgt;
					else if (rescan === edg) throw new Error("Infinite loop: no further intersect after non-convex");
					continue;
				}
				this.flipDiagonal(edg);
				if (this.intersectSegments(segP1, segP2, triangles[bot], triangles[top])) {
					if (rescan === -1) rescan = bot;
					if (rescan === bot) throw new Error("Infinite loop: flipped diagonal still intersects");
				}
				if (triangles[top] === segP2) {
					conEdge = top;
					edg = rescan;
					rescan = -1;
				} else if (this.intersectSegments(segP1, segP2, triangles[rgt], triangles[top])) edg = rgt;
			}
			const flips = this.flips;
			this.protect(conEdge);
			do {
				var flipped = 0;
				flips.forEach((edg) => {
					flips.delete(edg);
					const adj = halfedges[edg];
					if (adj === -1) return;
					flips.delete(adj);
					if (!this.isDelaunay(edg)) {
						this.flipDiagonal(edg);
						flipped++;
					}
				});
			} while (flipped > 0);
			return this.findEdge(segP1, segP2);
		}
		/**
		* Fix the Delaunay condition. It is no longer necessary to call this
		* method after constraining (many) edges, since constrainOne will do it
		* after each.
		*
		* @param deep If true, keep checking & flipping edges until all
		*        edges are Delaunay, otherwise only check the edges once.
		* @return The triangulation object.
		*/
		delaunify(deep = false) {
			const halfedges = this.del.halfedges;
			const flips = this.flips;
			const consd = this.consd;
			const len = halfedges.length;
			do {
				var flipped = 0;
				for (let edg = 0; edg < len; edg++) {
					if (consd.has(edg)) continue;
					flips.delete(edg);
					const adj = halfedges[edg];
					if (adj === -1) continue;
					flips.delete(adj);
					if (!this.isDelaunay(edg)) {
						this.flipDiagonal(edg);
						flipped++;
					}
				}
			} while (deep && flipped > 0);
			return this;
		}
		/**
		* Call constrainOne on each edge, and delaunify afterwards.
		*
		* @param edges The edges to constrain: each element is an array with
		*        [p1, p2] which are indices into the points array originally
		*        supplied to Delaunator.
		* @return The triangulation object.
		*/
		constrainAll(edges) {
			const len = edges.length;
			for (let i = 0; i < len; i++) {
				const e = edges[i];
				this.constrainOne(e[0], e[1]);
			}
			return this;
		}
		/**
		* Whether an edge is a constrained edge.
		*
		* @param edg The edge id.
		* @return True if the edge is constrained.
		*/
		isConstrained(edg) {
			return this.consd.has(edg);
		}
		/**
		* Find the edge that points from p1 -> p2. If there is only an edge from
		* p2 -> p1 (i.e. it is on the hull), returns the negative id of it.
		*
		* @param p1 The index of the first point into the points array.
		* @param p2 The index of the second point into the points array.
		* @return The id of the edge that points from p1 -> p2, or the negative
		*         id of the edge that goes from p2 -> p1, or Infinity if there is
		*         no edge between p1 and p2.
		*/
		findEdge(p1, p2) {
			const start1 = this.vertMap[p2];
			const triangles = this.del.triangles;
			const halfedges = this.del.halfedges;
			let edg = start1;
			let prv = -1;
			do {
				if (triangles[edg] === p1) return edg;
				prv = nextEdge(edg);
				edg = halfedges[prv];
			} while (edg !== -1 && edg !== start1);
			if (triangles[nextEdge(prv)] === p1) return -prv;
			return Infinity;
		}
		/**
		* Find points that are not triangulated. Trying to constrain an edge
		* between two points either of which are not triangulated, will result in
		* an error being thrown from constrainOne.
		*
		* @return An array of ids of points that have no incoming edges.
		*/
		untriangulatedPoints() {
			const ret = [];
			const vm = this.vertMap;
			const numPoints = vm.length;
			for (let i = 0; i < numPoints; i++) if (vm[i] === U32NIL) ret.push(i);
			return ret;
		}
		/**
		* Mark an edge as constrained, i.e. should not be touched by `delaunify`.
		*
		* @private
		* @param edg The edge id.
		* @return If edg has an adjacent, returns that, otherwise -edg.
		*/
		protect(edg) {
			const adj = this.del.halfedges[edg];
			const flips = this.flips;
			const consd = this.consd;
			flips.delete(edg);
			consd.add(edg);
			if (adj !== -1) {
				flips.delete(adj);
				consd.add(adj);
				return adj;
			}
			return -edg;
		}
		/**
		* Mark an edge as flipped, unless it is already marked as constrained.
		*
		* @private
		* @param edg The edge id.
		* @return True if edg was not constrained.
		*/
		markFlip(edg) {
			const halfedges = this.del.halfedges;
			const flips = this.flips;
			if (this.consd.has(edg)) return false;
			const adj = halfedges[edg];
			if (adj !== -1) {
				flips.add(edg);
				flips.add(adj);
			}
			return true;
		}
		/**
		* Flip the edge shared by two triangles.
		*
		* @private
		* @param edg The edge shared by the two triangles, must have an
		*        adjacent half-edge.
		* @return The new diagonal.
		*/
		flipDiagonal(edg) {
			const triangles = this.del.triangles;
			const halfedges = this.del.halfedges;
			const flips = this.flips;
			const consd = this.consd;
			const adj = halfedges[edg];
			const bot = prevEdge(edg);
			const lft = nextEdge(edg);
			const top = prevEdge(adj);
			const rgt = nextEdge(adj);
			const adjBot = halfedges[bot];
			const adjTop = halfedges[top];
			if (consd.has(edg)) throw new Error("Trying to flip a constrained edge");
			triangles[edg] = triangles[top];
			halfedges[edg] = adjTop;
			if (!flips.set(edg, flips.has(top))) consd.set(edg, consd.has(top));
			if (adjTop !== -1) halfedges[adjTop] = edg;
			halfedges[bot] = top;
			triangles[adj] = triangles[bot];
			halfedges[adj] = adjBot;
			if (!flips.set(adj, flips.has(bot))) consd.set(adj, consd.has(bot));
			if (adjBot !== -1) halfedges[adjBot] = adj;
			halfedges[top] = bot;
			this.markFlip(edg);
			this.markFlip(lft);
			this.markFlip(adj);
			this.markFlip(rgt);
			flips.add(bot);
			consd.delete(bot);
			flips.add(top);
			consd.delete(top);
			this.updateVert(edg);
			this.updateVert(lft);
			this.updateVert(adj);
			this.updateVert(rgt);
			return bot;
		}
		/**
		* Whether the two triangles sharing edg conform to the Delaunay condition.
		* As a shortcut, if the given edge has no adjacent (is on the hull), it is
		* certainly Delaunay.
		*
		* @private
		* @param edg The edge shared by the triangles to test.
		* @return True if they are Delaunay.
		*/
		isDelaunay(edg) {
			const triangles = this.del.triangles;
			const adj = this.del.halfedges[edg];
			if (adj === -1) return true;
			const p1 = triangles[prevEdge(edg)];
			const p2 = triangles[edg];
			const p3 = triangles[nextEdge(edg)];
			const px = triangles[prevEdge(adj)];
			return !this.inCircle(p1, p2, p3, px);
		}
		/**
		* Update the vertex -> incoming edge map.
		*
		* @private
		* @param start The id of an *outgoing* edge.
		* @return The id of the right-most incoming edge.
		*/
		updateVert(start) {
			const triangles = this.del.triangles;
			const halfedges = this.del.halfedges;
			const vm = this.vertMap;
			const v = triangles[start];
			let inc = prevEdge(start);
			let adj = halfedges[inc];
			while (adj !== -1 && adj !== start) {
				inc = prevEdge(adj);
				adj = halfedges[inc];
			}
			vm[v] = inc;
			return inc;
		}
		/**
		* Whether the segment between [p1, p2] intersects with [p3, p4]. When the
		* segments share an end-point (e.g. p1 == p3 etc.), they are not considered
		* intersecting.
		*
		* @private
		* @param p1 The index of point 1 into this.del.coords.
		* @param p2 The index of point 2 into this.del.coords.
		* @param p3 The index of point 3 into this.del.coords.
		* @param p4 The index of point 4 into this.del.coords.
		* @return True if the segments intersect.
		*/
		intersectSegments(p1, p2, p3, p4) {
			const pts = this.del.coords;
			if (p1 === p3 || p1 === p4 || p2 === p3 || p2 === p4) return false;
			return intersectSegments(pts[p1 * 2], pts[p1 * 2 + 1], pts[p2 * 2], pts[p2 * 2 + 1], pts[p3 * 2], pts[p3 * 2 + 1], pts[p4 * 2], pts[p4 * 2 + 1]);
		}
		/**
		* Whether point px is in the circumcircle of the triangle formed by p1, p2,
		* and p3 (which are in counter-clockwise order).
		*
		* @param p1 The index of point 1 into this.del.coords.
		* @param p2 The index of point 2 into this.del.coords.
		* @param p3 The index of point 3 into this.del.coords.
		* @param px The index of point x into this.del.coords.
		* @return True if (px, py) is in the circumcircle.
		*/
		inCircle(p1, p2, p3, px) {
			const pts = this.del.coords;
			return incircle(pts[p1 * 2], pts[p1 * 2 + 1], pts[p2 * 2], pts[p2 * 2 + 1], pts[p3 * 2], pts[p3 * 2 + 1], pts[px * 2], pts[px * 2 + 1]) < 0;
		}
		/**
		* Whether point p1, p2, and p are collinear.
		*
		* @private
		* @param p1 The index of segment point 1 into this.del.coords.
		* @param p2 The index of segment point 2 into this.del.coords.
		* @param p The index of the point p into this.del.coords.
		* @return True if the points are collinear.
		*/
		isCollinear(p1, p2, p) {
			const pts = this.del.coords;
			return orient2d(pts[p1 * 2], pts[p1 * 2 + 1], pts[p2 * 2], pts[p2 * 2 + 1], pts[p * 2], pts[p * 2 + 1]) === 0;
		}
	};
	Constrainautor.intersectSegments = intersectSegments;
	/**
	* Compute if two line segments [p1, p2] and [p3, p4] intersect.
	*
	* @name Constrainautor.intersectSegments
	* @source https://github.com/mikolalysenko/robust-segment-intersect
	* @param p1x The x coordinate of point 1 of the first segment.
	* @param p1y The y coordinate of point 1 of the first segment.
	* @param p2x The x coordinate of point 2 of the first segment.
	* @param p2y The y coordinate of point 2 of the first segment.
	* @param p3x The x coordinate of point 1 of the second segment.
	* @param p3y The y coordinate of point 1 of the second segment.
	* @param p4x The x coordinate of point 2 of the second segment.
	* @param p4y The y coordinate of point 2 of the second segment.
	* @return True if the line segments intersect.
	*/
	function intersectSegments(p1x, p1y, p2x, p2y, p3x, p3y, p4x, p4y) {
		const x0 = orient2d(p1x, p1y, p3x, p3y, p4x, p4y);
		const y0 = orient2d(p2x, p2y, p3x, p3y, p4x, p4y);
		if (x0 > 0 && y0 > 0 || x0 < 0 && y0 < 0) return false;
		const x1 = orient2d(p3x, p3y, p1x, p1y, p2x, p2y);
		const y1 = orient2d(p4x, p4y, p1x, p1y, p2x, p2y);
		if (x1 > 0 && y1 > 0 || x1 < 0 && y1 < 0) return false;
		if (x0 === 0 && y0 === 0 && x1 === 0 && y1 === 0) return !(Math.max(p3x, p4x) < Math.min(p1x, p2x) || Math.max(p1x, p2x) < Math.min(p3x, p4x) || Math.max(p3y, p4y) < Math.min(p1y, p2y) || Math.max(p1y, p2y) < Math.min(p3y, p4y));
		return true;
	}
	//#endregion
	//#region src/three/proj.js
	const ORIGIN = [129.05, 37.5];
	const KM_LON = 111.32 * Math.cos(ORIGIN[1] * Math.PI / 180);
	const KM_LAT = 110.574;
	const toXZ = (lon, lat) => [(lon - ORIGIN[0]) * KM_LON, -(lat - ORIGIN[1]) * KM_LAT];
	const toLonLat = (x, z) => [ORIGIN[0] + x / KM_LON, ORIGIN[1] - z / KM_LAT];
	//#endregion
	//#region src/three/terrainBuild.js
	function makeDem(data, meta) {
		const [w, s, e, n] = meta.bbox;
		const { cols, rows } = meta;
		const sample = (lon, lat) => {
			const fx = (lon - w) / (e - w) * (cols - 1);
			const fy = (n - lat) / (n - s) * (rows - 1);
			const x0 = Math.max(0, Math.min(cols - 2, Math.floor(fx)));
			const y0 = Math.max(0, Math.min(rows - 2, Math.floor(fy)));
			const ax = Math.max(0, Math.min(1, fx - x0));
			const ay = Math.max(0, Math.min(1, fy - y0));
			const i = y0 * cols + x0;
			return (data[i] * (1 - ax) + data[i + 1] * ax) * (1 - ay) + (data[i + cols] * (1 - ax) + data[i + cols + 1] * ax) * ay;
		};
		return {
			sample,
			cols,
			rows,
			data,
			meta
		};
	}
	const BASE_Y = -1.1;
	function pointInRings(x, z, rings) {
		let inside = false;
		for (const r of rings) for (let i = 0, j = r.length - 1; i < r.length; j = i++) {
			const [xi, zi] = r[i], [xj, zj] = r[j];
			if (zi > z !== zj > z && x < (xj - xi) * (z - zi) / (zj - zi) + xi) inside = !inside;
		}
		return inside;
	}
	function resample(ring, spacing) {
		const out = [];
		for (let i = 0; i < ring.length - 1; i++) {
			const [x0, z0] = ring[i], [x1, z1] = ring[i + 1];
			const len = Math.hypot(x1 - x0, z1 - z0);
			const n = Math.max(1, Math.ceil(len / spacing));
			for (let k = 0; k < n; k++) out.push([x0 + (x1 - x0) * k / n, z0 + (z1 - z0) * k / n]);
		}
		return out;
	}
	function topOf(poly, spacing) {
		const rings = poly.map((r) => resample(r, spacing));
		const pts = [];
		const edges = [];
		for (const r of rings) {
			const base = pts.length;
			r.forEach((p, i) => {
				pts.push(p);
				edges.push([base + i, base + (i + 1) % r.length]);
			});
		}
		const nBoundary = pts.length;
		let x0 = Infinity, x1 = -Infinity, z0 = Infinity, z1 = -Infinity;
		for (const [x, z] of pts) {
			x0 = Math.min(x0, x);
			x1 = Math.max(x1, x);
			z0 = Math.min(z0, z);
			z1 = Math.max(z1, z);
		}
		const cell = spacing * .7;
		const bucket = /* @__PURE__ */ new Map();
		const key = (x, z) => `${Math.floor(x / cell)},${Math.floor(z / cell)}`;
		for (let i = 0; i < nBoundary; i++) {
			const k = key(pts[i][0], pts[i][1]);
			(bucket.get(k) || bucket.set(k, []).get(k)).push(i);
		}
		const near = (x, z) => {
			const cx = Math.floor(x / cell), cz = Math.floor(z / cell);
			for (let a = -1; a <= 1; a++) for (let b = -1; b <= 1; b++) {
				const l = bucket.get(`${cx + a},${cz + b}`);
				if (l) {
					for (const i of l) if (Math.hypot(pts[i][0] - x, pts[i][1] - z) < spacing * .62) return true;
				}
			}
			return false;
		};
		for (let z = z0 + spacing / 2; z < z1; z += spacing) {
			const off = Math.round((z - z0) / spacing) % 2 * (spacing / 2);
			for (let x = x0 + spacing / 2 + off; x < x1; x += spacing) if (pointInRings(x, z, rings) && !near(x, z)) pts.push([x, z]);
		}
		const flat = new Float64Array(pts.length * 2);
		pts.forEach((p, i) => {
			flat[i * 2] = p[0];
			flat[i * 2 + 1] = p[1];
		});
		const del = new Delaunator(flat);
		const con = new Constrainautor(del);
		for (const [a, b] of edges) if (a !== b) try {
			con.constrainOne(a, b);
		} catch {}
		const keep = [];
		const tri = del.triangles;
		for (let t = 0; t < tri.length; t += 3) {
			const a = tri[t], b = tri[t + 1], c = tri[t + 2];
			if (pointInRings((pts[a][0] + pts[b][0] + pts[c][0]) / 3, (pts[a][1] + pts[b][1] + pts[c][1]) / 3, rings)) keep.push(a, c, b);
		}
		return {
			pts,
			keep,
			rings,
			nBoundary
		};
	}
	function shade(h) {
		return .97 - Math.min(1, h / 1.5) * .18;
	}
	function buildPiece(piece, dem, spacing) {
		const { sample } = dem;
		const pos = [];
		const col = [];
		const idx = [];
		const wallPos = [];
		const wallCol = [];
		const wallIdx = [];
		const line = [];
		let hMax = 0;
		let hSum = 0;
		let hN = 0;
		const heightAt = (x, z) => {
			const [lon, lat] = toLonLat(x, z);
			return sample(lon, lat) / 1e3 * 1;
		};
		for (const poly of piece.coordinates) {
			const { pts, keep, rings: rs } = topOf(poly.map((r) => r.map(([lon, lat]) => toXZ(lon, lat))), spacing);
			const offset = pos.length / 3;
			for (const [x, z] of pts) {
				const h = heightAt(x, z);
				hMax = Math.max(hMax, h);
				hSum += h;
				hN++;
				pos.push(x, h, z);
				const g = shade(h);
				col.push(g, g, g);
			}
			for (const i of keep) idx.push(offset + i);
			for (const r of rs) {
				const m = r.length;
				for (let i = 0; i < m; i++) {
					const a = r[i], b = r[(i + 1) % m];
					const ha = heightAt(a[0], a[1]);
					const hb = heightAt(b[0], b[1]);
					line.push(a[0], ha + .004, a[1], b[0], hb + .004, b[1]);
					const base = wallPos.length / 3;
					wallPos.push(a[0], ha, a[1], b[0], hb, b[1], b[0], BASE_Y, b[1], a[0], BASE_Y, a[1]);
					const top = .9, bot = .5;
					wallCol.push(top, top, top, top, top, top, bot, bot, bot, bot, bot, bot);
					wallIdx.push(base, base + 2, base + 1, base, base + 3, base + 2);
				}
			}
		}
		return {
			code: piece.code,
			pos: new Float32Array(pos),
			col: new Float32Array(col),
			idx: new Uint32Array(idx),
			line: new Float32Array(line),
			wallPos: new Float32Array(wallPos),
			wallCol: new Float32Array(wallCol),
			wallIdx: new Uint32Array(wallIdx),
			hMax,
			hMean: hN ? hSum / hN : 0
		};
	}
	//#endregion
	//#region node_modules/earcut/src/earcut.js
	/**
	* A vertex in a circular doubly linked list representing a polygon ring.
	* `prev`/`next` are always linked (set immediately after {@link createNode}), so they're typed
	* non-null; `prevZ`/`nextZ` are the z-order list links and are null at the ends.
	*
	* @typedef {object} Node
	* @property {number} i vertex index in the coordinates array
	* @property {number} x vertex x coordinate
	* @property {number} y vertex y coordinate
	* @property {Node} prev previous vertex node in the polygon ring
	* @property {Node} next next vertex node in the polygon ring
	* @property {number} z z-order curve value; doubles as the owning block index during eliminateHoles
	* @property {Node | null} prevZ previous node in z-order
	* @property {Node | null} nextZ next node in z-order
	*/
	/** @type {Set<Node>} */
	const steiners = /* @__PURE__ */ new Set();
	let filteredOut = false;
	/**
	* Triangulate a polygon given as a flat array of vertex coordinates.
	*
	* @param {ArrayLike<number>} data flat array of vertex coordinates
	* @param {ArrayLike<number> | null} [holeIndices] indices (in vertices, not coordinates) where each hole ring starts
	* @param {number} [dim=2] number of coordinates per vertex in `data`
	* @returns {number[]} triangles as triplets of vertex indices into `data`
	* @example earcut([10,0, 0,50, 60,60, 70,10]); // [1,0,3, 3,2,1]
	*/
	function earcut(data, holeIndices, dim = 2) {
		const hasHoles = holeIndices && holeIndices.length;
		const outerLen = hasHoles ? holeIndices[0] * dim : data.length;
		if (steiners.size) steiners.clear();
		let outerNode = linkedList(data, 0, outerLen, dim, true);
		/** @type {number[]} */
		const triangles = [];
		if (!outerNode || outerNode.next === outerNode.prev) return triangles;
		let minX = 0, minY = 0, invSize = 0;
		if (hasHoles) outerNode = eliminateHoles(data, holeIndices, outerNode, dim);
		if (data.length > 80 * dim) {
			minX = data[0];
			minY = data[1];
			let maxX = minX;
			let maxY = minY;
			for (let i = dim; i < outerLen; i += dim) {
				const x = data[i];
				const y = data[i + 1];
				if (x < minX) minX = x;
				if (y < minY) minY = y;
				if (x > maxX) maxX = x;
				if (y > maxY) maxY = y;
			}
			invSize = Math.max(maxX - minX, maxY - minY);
			invSize = invSize !== 0 ? 32767 / invSize : 0;
		}
		earcutLinked(outerNode, triangles, minX, minY, invSize);
		return triangles;
	}
	/** @param {ArrayLike<number>} data @param {number} start @param {number} end @param {number} dim @param {boolean} clockwise @returns {Node | null} */
	function linkedList(data, start, end, dim, clockwise) {
		/** @type {Node | null} */
		let last = null;
		if (clockwise === signedArea(data, start, end, dim) > 0) for (let i = start; i < end; i += dim) last = insertNode(i / dim | 0, data[i], data[i + 1], last);
		else for (let i = end - dim; i >= start; i -= dim) last = insertNode(i / dim | 0, data[i], data[i + 1], last);
		if (last && equals(last, last.next)) {
			removeNode(last);
			last = last.next;
		}
		return last;
	}
	/** @param {Node} start @param {Node} [end] @returns {Node} */
	function filterPoints(start, end = start) {
		const full = end === start;
		let p = start, again;
		do {
			again = false;
			if (p !== p.next && (steiners.size === 0 || !steiners.has(p)) && (equals(p, p.next) || area(p.prev, p, p.next) === 0)) {
				if (full || p === end) end = p.prev;
				filteredOut = true;
				removeNode(p);
				p = p.prev;
				again = true;
			} else if (full || p !== end) {
				p = p.next;
				again = !full;
			}
		} while (again || p !== end);
		return end;
	}
	/** @param {Node} ear @param {number[]} triangles @param {number} minX @param {number} minY @param {number} invSize */
	function earcutLinked(ear, triangles, minX, minY, invSize) {
		if (invSize) indexCurve(ear, minX, minY, invSize);
		let stop = ear, cured = false;
		while (ear.prev !== ear.next) {
			const prev = ear.prev;
			/** @type {Node} */
			const next = ear.next;
			if (area(prev, ear, next) < 0 && (invSize ? isEarHashed(ear, minX, minY, invSize) : isEar(ear))) {
				triangles.push(prev.i, ear.i, next.i);
				removeNode(ear);
				ear = next;
				stop = next;
				continue;
			}
			ear = next;
			if (ear === stop) {
				filteredOut = false;
				ear = filterPoints(ear);
				if (filteredOut) {
					stop = ear;
					continue;
				}
				if (!cured) {
					ear = cureLocalIntersections(ear, triangles);
					stop = ear;
					cured = true;
					continue;
				}
				splitEarcut(ear, triangles, minX, minY, invSize);
				break;
			}
		}
	}
	/** @param {Node} ear @returns {boolean} */
	function isEar(ear) {
		const a = ear.prev, b = ear, c = ear.next, ax = a.x, bx = b.x, cx = c.x, ay = a.y, by = b.y, cy = c.y, x0 = Math.min(ax, bx, cx), y0 = Math.min(ay, by, cy), x1 = Math.max(ax, bx, cx), y1 = Math.max(ay, by, cy);
		let p = c.next;
		while (p !== a) {
			if (p.x >= x0 && p.x <= x1 && p.y >= y0 && p.y <= y1 && !(ax === p.x && ay === p.y) && pointInTriangle(ax, ay, bx, by, cx, cy, p.x, p.y) && area(p.prev, p, p.next) >= 0) return false;
			p = p.next;
		}
		return true;
	}
	/** @param {Node} ear @param {number} minX @param {number} minY @param {number} invSize @returns {boolean} */
	function isEarHashed(ear, minX, minY, invSize) {
		const a = ear.prev, b = ear, c = ear.next, ax = a.x, bx = b.x, cx = c.x, ay = a.y, by = b.y, cy = c.y, x0 = Math.min(ax, bx, cx), y0 = Math.min(ay, by, cy), x1 = Math.max(ax, bx, cx), y1 = Math.max(ay, by, cy), minZ = zOrder(x0, y0, minX, minY, invSize), maxZ = zOrder(x1, y1, minX, minY, invSize);
		let p = ear.prevZ;
		while (p && p.z >= minZ) {
			if (p.x >= x0 && p.x <= x1 && p.y >= y0 && p.y <= y1 && p !== c && !(ax === p.x && ay === p.y) && pointInTriangle(ax, ay, bx, by, cx, cy, p.x, p.y) && area(p.prev, p, p.next) >= 0) return false;
			p = p.prevZ;
		}
		let n = ear.nextZ;
		while (n && n.z <= maxZ) {
			if (n.x >= x0 && n.x <= x1 && n.y >= y0 && n.y <= y1 && n !== c && !(ax === n.x && ay === n.y) && pointInTriangle(ax, ay, bx, by, cx, cy, n.x, n.y) && area(n.prev, n, n.next) >= 0) return false;
			n = n.nextZ;
		}
		return true;
	}
	/** @param {Node} start @param {number[]} triangles @returns {Node} */
	function cureLocalIntersections(start, triangles) {
		let p = start;
		let cured = false;
		do {
			const a = p.prev, b = p.next.next;
			if (intersects(a, p, p.next, b, false) && locallyInside(a, b) && locallyInside(b, a)) {
				triangles.push(a.i, p.i, b.i);
				removeNode(p);
				removeNode(p.next);
				p = start = b;
				cured = true;
			}
			p = p.next;
		} while (p !== start);
		return cured ? filterPoints(p) : p;
	}
	/** @param {Node} start @param {number[]} triangles @param {number} minX @param {number} minY @param {number} invSize */
	function splitEarcut(start, triangles, minX, minY, invSize) {
		let a = start;
		do {
			let b = a.next.next;
			while (b !== a.prev) {
				if (a.i !== b.i && isValidDiagonal(a, b)) {
					let c = splitPolygon(a, b);
					a = filterPoints(a, a.next);
					c = filterPoints(c, c.next);
					earcutLinked(a, triangles, minX, minY, invSize);
					earcutLinked(c, triangles, minX, minY, invSize);
					return;
				}
				b = b.next;
			}
			a = a.next;
		} while (a !== start);
	}
	let indexActive = false;
	/** @param {ArrayLike<number>} data @param {ArrayLike<number>} holeIndices @param {Node} outerNode @param {number} dim @returns {Node} */
	function eliminateHoles(data, holeIndices, outerNode, dim) {
		const queue = [];
		for (let i = 0, len = holeIndices.length; i < len; i++) {
			const list = linkedList(data, holeIndices[i] * dim, i < len - 1 ? holeIndices[i + 1] * dim : data.length, dim, false);
			if (list === list.next) steiners.add(list);
			queue.push(getLeftmost(list));
		}
		queue.sort(compareXYSlope);
		buildBlockIndex(data.length / dim, holeIndices.length);
		indexSegment(outerNode, outerNode);
		indexActive = true;
		for (let i = 0; i < queue.length; i++) outerNode = eliminateHole(queue[i], outerNode);
		indexActive = false;
		return filterPoints(outerNode);
	}
	/** @param {Node} a @param {Node} b @returns {number} */
	function compareXYSlope(a, b) {
		return a.x - b.x || a.y - b.y || (a.next.y - a.y) / (a.next.x - a.x) - (b.next.y - b.y) / (b.next.x - b.x);
	}
	/** @param {Node} hole @param {Node} outerNode @returns {Node} */
	function eliminateHole(hole, outerNode) {
		const bridge = findHoleBridge(hole, outerNode);
		if (!bridge) return outerNode;
		const bridgeReverse = splitPolygon(bridge, hole);
		const bridge2 = bridgeReverse.next;
		indexSegment(bridge, bridge2.next);
		filterPoints(bridgeReverse, bridgeReverse.next);
		return filterPoints(bridge, bridge.next);
	}
	const K = 16;
	let blockBBox = /* @__PURE__ */ new Float64Array(0);
	let numBlocks = 0;
	/** @type {Node[]} */
	const blockHead = [];
	/** @type {Node[]} */
	const blockStop = [];
	/** @param {number} maxNodes @param {number} numHoles */
	function buildBlockIndex(maxNodes, numHoles) {
		const maxBlocks = Math.ceil((maxNodes + 2 * numHoles) / K) + numHoles + 2;
		if (blockBBox.length < maxBlocks * 4) blockBBox = new Float64Array(maxBlocks * 4);
		numBlocks = 0;
	}
	/** @param {Node} head @param {Node} stop */
	function indexSegment(head, stop) {
		let p = head;
		do {
			const b = numBlocks++;
			blockHead[b] = p;
			let minX = p.x, minY = p.y, maxX = p.x, maxY = p.y;
			let k = 0;
			do {
				const c = p.next;
				p.z = b;
				if (c.x < minX) minX = c.x;
				if (c.x > maxX) maxX = c.x;
				if (c.y < minY) minY = c.y;
				if (c.y > maxY) maxY = c.y;
				p = c;
			} while (++k < K && p !== stop);
			blockStop[b] = p;
			const g = b * 4;
			blockBBox[g] = minX;
			blockBBox[g + 1] = minY;
			blockBBox[g + 2] = maxX;
			blockBBox[g + 3] = maxY;
		} while (p !== stop);
	}
	/** @param {Node} head @param {Node} tail */
	function growBlock(head, tail) {
		const g = head.z * 4;
		if (tail.x < blockBBox[g]) blockBBox[g] = tail.x;
		if (tail.y < blockBBox[g + 1]) blockBBox[g + 1] = tail.y;
		if (tail.x > blockBBox[g + 2]) blockBBox[g + 2] = tail.x;
		if (tail.y > blockBBox[g + 3]) blockBBox[g + 3] = tail.y;
	}
	/** @param {number} b @returns {Node} */
	function liveBlockStop(b) {
		let stop = blockStop[b];
		while (stop.prev.next !== stop) stop = stop.next;
		blockStop[b] = stop;
		return stop;
	}
	/** @param {number} b @returns {Node} */
	function liveBlockHead(b) {
		let head = blockHead[b];
		while (head.prev.next !== head) head = head.next;
		blockHead[b] = head;
		return head;
	}
	/** @param {Node} hole @param {Node} outerNode @returns {Node | null} */
	function findHoleBridge(hole, outerNode) {
		let p = outerNode;
		const hx = hole.x;
		const hy = hole.y;
		let qx = -Infinity;
		/** @type {Node | undefined} */
		let m;
		if (equals(hole, p)) return p;
		for (let b = 0, g = 0; b < numBlocks; b++, g += 4) {
			if (hy < blockBBox[g + 1] || hy > blockBBox[g + 3] || blockBBox[g] > hx || blockBBox[g + 2] <= qx) continue;
			const stop = liveBlockStop(b);
			p = liveBlockHead(b);
			do {
				if (p.prev.next === p) {
					if (equals(hole, p.next)) return p.next;
					else if (hy <= p.y && hy >= p.next.y && p.next.y !== p.y) {
						const x = p.x + (hy - p.y) * (p.next.x - p.x) / (p.next.y - p.y);
						if (x <= hx && x > qx) {
							qx = x;
							m = p.x < p.next.x ? p : p.next;
							if (x === hx) return m;
						}
					}
				}
				p = p.next;
			} while (p !== stop);
		}
		if (!m) return null;
		const mx = m.x;
		const my = m.y;
		const tminY = Math.min(hy, my);
		const tmaxY = Math.max(hy, my);
		let tanMin = Infinity;
		for (let b = 0, g = 0; b < numBlocks; b++, g += 4) {
			if (blockBBox[g + 2] < mx || blockBBox[g] > hx || blockBBox[g + 3] < tminY || blockBBox[g + 1] > tmaxY) continue;
			const stop = liveBlockStop(b);
			p = liveBlockHead(b);
			do {
				if (p.prev.next === p && hx >= p.x && p.x >= mx && hx !== p.x && pointInTriangle(hy < my ? hx : qx, hy, mx, my, hy < my ? qx : hx, hy, p.x, p.y)) {
					const tan = Math.abs(hy - p.y) / (hx - p.x);
					if ((locallyInside(p, hole) || p.y === hy && p.next.y === hy && p.next.x > hx) && (tan < tanMin || tan === tanMin && (p.x > m.x || p.x === m.x && sectorContainsSector(m, p)))) {
						m = p;
						tanMin = tan;
					}
				}
				p = p.next;
			} while (p !== stop);
		}
		return m;
	}
	/** @param {Node} m @param {Node} p @returns {boolean} */
	function sectorContainsSector(m, p) {
		return area(m.prev, m, p.prev) < 0 && area(p.next, m, m.next) < 0;
	}
	/** @type {Node[]} */
	const sortArr = [];
	/** @type {Node[]} */
	let sortBuf = [];
	let zArr = /* @__PURE__ */ new Uint32Array(0);
	let zBuf = /* @__PURE__ */ new Uint32Array(0);
	const counts = /* @__PURE__ */ new Uint32Array(256);
	/** @param {Node} start @param {number} minX @param {number} minY @param {number} invSize */
	function indexCurve(start, minX, minY, invSize) {
		let p = start;
		let n = 0;
		do {
			p.z = zOrder(p.x, p.y, minX, minY, invSize);
			sortArr[n++] = p;
			p = p.next;
		} while (p !== start);
		sortNodes(n);
		/** @type {Node | null} */
		let prev = null;
		for (let i = 0; i < n; i++) {
			const node = sortArr[i];
			node.prevZ = prev;
			if (prev) prev.nextZ = node;
			prev = node;
		}
		/** @type {Node} */ prev.nextZ = null;
		sortArr.fill(null, 0, n);
		sortBuf.fill(null, 0, n);
	}
	/** @param {number} n */
	function sortNodes(n) {
		if (n <= 32) {
			for (let i = 1; i < n; i++) {
				const node = sortArr[i], z = node.z;
				let j = i - 1;
				while (j >= 0 && sortArr[j].z > z) {
					sortArr[j + 1] = sortArr[j];
					j--;
				}
				sortArr[j + 1] = node;
			}
			return;
		}
		if (zArr.length < n) {
			zArr = new Uint32Array(n);
			zBuf = new Uint32Array(n);
			sortBuf = new Array(n);
		}
		for (let i = 0; i < n; i++) zArr[i] = sortArr[i].z;
		radixPass(n, sortArr, zArr, sortBuf, zBuf, 0);
		radixPass(n, sortBuf, zBuf, sortArr, zArr, 8);
		radixPass(n, sortArr, zArr, sortBuf, zBuf, 16);
		radixPass(n, sortBuf, zBuf, sortArr, zArr, 24);
	}
	/** @param {number} n @param {Node[]} src @param {Uint32Array} srcZ @param {Node[]} dst @param {Uint32Array} dstZ @param {number} shift */
	function radixPass(n, src, srcZ, dst, dstZ, shift) {
		counts.fill(0);
		for (let i = 0; i < n; i++) counts[srcZ[i] >>> shift & 255]++;
		let sum = 0;
		for (let b = 0; b < 256; b++) {
			const c = counts[b];
			counts[b] = sum;
			sum += c;
		}
		for (let i = 0; i < n; i++) {
			const z = srcZ[i];
			const pos = counts[z >>> shift & 255]++;
			dst[pos] = src[i];
			dstZ[pos] = z;
		}
	}
	/** @param {number} x @param {number} y @param {number} minX @param {number} minY @param {number} invSize @returns {number} */
	function zOrder(x, y, minX, minY, invSize) {
		x = (x - minX) * invSize | 0;
		y = (y - minY) * invSize | 0;
		x = (x | x << 8) & 16711935;
		x = (x | x << 4) & 252645135;
		x = (x | x << 2) & 858993459;
		x = (x | x << 1) & 1431655765;
		y = (y | y << 8) & 16711935;
		y = (y | y << 4) & 252645135;
		y = (y | y << 2) & 858993459;
		y = (y | y << 1) & 1431655765;
		return x | y << 1;
	}
	/** @param {Node} start @returns {Node} */
	function getLeftmost(start) {
		let p = start, leftmost = start;
		do {
			if (p.x < leftmost.x || p.x === leftmost.x && p.y < leftmost.y) leftmost = p;
			p = p.next;
		} while (p !== start);
		return leftmost;
	}
	/** @param {number} ax @param {number} ay @param {number} bx @param {number} by @param {number} cx @param {number} cy @param {number} px @param {number} py @returns {boolean} */
	function pointInTriangle(ax, ay, bx, by, cx, cy, px, py) {
		return (cx - px) * (ay - py) >= (ax - px) * (cy - py) && (ax - px) * (by - py) >= (bx - px) * (ay - py) && (bx - px) * (cy - py) >= (cx - px) * (by - py);
	}
	/** @param {Node} a @param {Node} b @returns {boolean} true when the diagonal is valid */
	function isValidDiagonal(a, b) {
		const zeroLength = equals(a, b) && area(a.prev, a, a.next) > 0 && area(b.prev, b, b.next) > 0;
		return a.next.i !== b.i && (zeroLength || locallyInside(a, b) && locallyInside(b, a) && (area(a.prev, a, b.prev) !== 0 || area(a, b.prev, b) !== 0)) && !intersectsPolygon(a, b) && (zeroLength || middleInside(a, b));
	}
	/** @param {Node} p @param {Node} q @param {Node} r @returns {number} */
	function area(p, q, r) {
		return (q.y - p.y) * (r.x - q.x) - (q.x - p.x) * (r.y - q.y);
	}
	/** @param {Node} p1 @param {Node} p2 @returns {boolean} */
	function equals(p1, p2) {
		return p1.x === p2.x && p1.y === p2.y;
	}
	/** @param {Node} p1 @param {Node} q1 @param {Node} p2 @param {Node} q2 @param {boolean} [includeBoundary] @returns {boolean} */
	function intersects(p1, q1, p2, q2, includeBoundary = true) {
		const o1 = area(p1, q1, p2);
		const o2 = area(p1, q1, q2);
		const o3 = area(p2, q2, p1);
		const o4 = area(p2, q2, q1);
		if ((o1 > 0 && o2 < 0 || o1 < 0 && o2 > 0) && (o3 > 0 && o4 < 0 || o3 < 0 && o4 > 0)) return true;
		if (!includeBoundary) return false;
		if (o1 === 0 && onSegment(p1, p2, q1)) return true;
		if (o2 === 0 && onSegment(p1, q2, q1)) return true;
		if (o3 === 0 && onSegment(p2, p1, q2)) return true;
		if (o4 === 0 && onSegment(p2, q1, q2)) return true;
		return false;
	}
	/** @param {Node} p @param {Node} q @param {Node} r @returns {boolean} */
	function onSegment(p, q, r) {
		return q.x <= Math.max(p.x, r.x) && q.x >= Math.min(p.x, r.x) && q.y <= Math.max(p.y, r.y) && q.y >= Math.min(p.y, r.y);
	}
	/** @param {Node} a @param {Node} b @returns {boolean} */
	function intersectsPolygon(a, b) {
		const minX = Math.min(a.x, b.x);
		const maxX = Math.max(a.x, b.x);
		const minY = Math.min(a.y, b.y);
		const maxY = Math.max(a.y, b.y);
		let p = a;
		do {
			const n = p.next;
			if (p.x > maxX && n.x > maxX || p.x < minX && n.x < minX || p.y > maxY && n.y > maxY || p.y < minY && n.y < minY) {
				p = n;
				continue;
			}
			if (p.i !== a.i && n.i !== a.i && p.i !== b.i && n.i !== b.i && intersects(p, n, a, b)) return true;
			p = n;
		} while (p !== a);
		return false;
	}
	/** @param {Node} a @param {Node} b @returns {boolean} */
	function locallyInside(a, b) {
		return area(a.prev, a, a.next) < 0 ? area(a, b, a.next) >= 0 && area(a, a.prev, b) >= 0 : area(a, b, a.prev) < 0 || area(a, a.next, b) < 0;
	}
	/** @param {Node} a @param {Node} b @returns {boolean} */
	function middleInside(a, b) {
		let p = a;
		let inside = false;
		const px = (a.x + b.x) / 2;
		const py = (a.y + b.y) / 2;
		do {
			const n = p.next;
			if (p.y > py !== n.y > py && px < (n.x - p.x) * (py - p.y) / (n.y - p.y) + p.x) inside = !inside;
			p = n;
		} while (p !== a);
		return inside;
	}
	/** @param {Node} a @param {Node} b @returns {Node} */
	function splitPolygon(a, b) {
		const a2 = createNode(a.i, a.x, a.y), b2 = createNode(b.i, b.x, b.y), an = a.next, bp = b.prev;
		a.next = b;
		b.prev = a;
		a2.next = an;
		an.prev = a2;
		b2.next = a2;
		a2.prev = b2;
		bp.next = b2;
		b2.prev = bp;
		return b2;
	}
	/** @param {number} i @param {number} x @param {number} y @param {Node | null} last @returns {Node} */
	function insertNode(i, x, y, last) {
		const p = createNode(i, x, y);
		if (!last) {
			p.prev = p;
			p.next = p;
		} else {
			p.next = last.next;
			p.prev = last;
			last.next.prev = p;
			last.next = p;
		}
		return p;
	}
	/** @param {Node} p */
	function removeNode(p) {
		p.next.prev = p.prev;
		p.prev.next = p.next;
		if (p.prevZ) p.prevZ.nextZ = p.nextZ;
		if (p.nextZ) p.nextZ.prevZ = p.prevZ;
		if (indexActive) growBlock(p.prev, p.next);
	}
	/** @param {number} i @param {number} x @param {number} y @returns {Node} */
	function createNode(i, x, y) {
		return {
			i,
			x,
			y,
			prev: null,
			next: null,
			z: 0,
			prevZ: null,
			nextZ: null
		};
	}
	/** @param {ArrayLike<number>} data @param {number} start @param {number} end @param {number} dim @returns {number} */
	function signedArea(data, start, end, dim) {
		let sum = 0;
		for (let i = start, j = end - dim; i < end; i += dim) {
			sum += (data[j] - data[i]) * (data[i + 1] + data[j + 1]);
			j = i;
		}
		return sum;
	}
	//#endregion
	//#region src/three/buildingBuild.js
	const FLOOR_M = 3.2;
	function readBuildings(buf, bbox) {
		const dv = new DataView(buf);
		const v2 = dv.getUint32(0, true) === 2 && buf.byteLength > 12;
		let p = v2 ? 4 : 0;
		const n = dv.getUint32(p, true);
		p += 4;
		const nPts = dv.getUint32(p, true);
		p += 4;
		const counts = new Uint16Array(buf.slice(p, p + n * 2));
		p += n * 2;
		const floors = new Uint8Array(buf, p, n);
		p += n;
		let heights = null, uses = null;
		if (v2) {
			heights = new Uint16Array(buf.slice(p, p + n * 2));
			p += n * 2;
			uses = new Uint8Array(buf, p, n);
			p += n;
		}
		p += (4 - p % 4) % 4;
		const xy = new Uint16Array(buf, p, nPts * 2);
		const [w, s, e, nn] = bbox;
		return {
			n,
			counts,
			floors,
			heights,
			uses,
			xy,
			lon: (u) => w + u / 65535 * (e - w),
			lat: (v) => s + v / 65535 * (nn - s)
		};
	}
	function inRing(x, y, r) {
		let inside = false;
		for (let i = 0, j = r.length - 1; i < r.length; j = i++) {
			const [xi, yi] = r[i], [xj, yj] = r[j];
			if (yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi) inside = !inside;
		}
		return inside;
	}
	function buildBuildings(data, pieces, sample) {
		const { n, counts, floors, heights, uses, xy, lon, lat } = data;
		const owner = new Int32Array(n).fill(-1);
		const starts = new Uint32Array(n);
		const nv = new Uint32Array(pieces.length);
		const ni = new Uint32Array(pieces.length);
		const nb = new Uint32Array(pieces.length);
		let o = 0;
		let last = -1;
		const test = (k, cx, cy) => {
			const p = pieces[k];
			return cx >= p.bbox[0] && cx <= p.bbox[2] && cy >= p.bbox[1] && cy <= p.bbox[3] && p.coordinates.some((poly) => inRing(cx, cy, poly[0]) && !poly.slice(1).some((h) => inRing(cx, cy, h)));
		};
		for (let i = 0; i < n; i++) {
			const m = counts[i];
			starts[i] = o;
			let cx = 0, cy = 0;
			for (let k = 0; k < m; k++) {
				cx += xy[o + k * 2];
				cy += xy[o + k * 2 + 1];
			}
			o += m * 2;
			cx = lon(cx / m);
			cy = lat(cy / m);
			let pk = last >= 0 && test(last, cx, cy) ? last : -1;
			if (pk < 0) {
				for (let k = 0; k < pieces.length; k++) if (test(k, cx, cy)) {
					pk = k;
					break;
				}
			}
			if (pk < 0) continue;
			last = pk;
			owner[i] = pk;
			nv[pk] += m * 2;
			ni[pk] += m * 6 + (m - 2) * 3;
			nb[pk] += 1;
		}
		const out = pieces.map((p, k) => ({
			code: p.code,
			count: 0,
			pos: new Float32Array(nv[k] * 3),
			idx: new Uint32Array(ni[k]),
			bid: new Uint32Array(nv[k]),
			info: new Float32Array(nb[k] * 5),
			vi: 0,
			ii: 0
		}));
		const xz = [];
		for (let i = 0; i < n; i++) {
			const pk = owner[i];
			if (pk < 0) continue;
			const b = out[pk];
			const m = counts[i];
			const s0 = starts[i];
			let gMin = Infinity, gMax = -Infinity, cx = 0, cy = 0;
			xz.length = 0;
			for (let k = 0; k < m; k++) {
				const a = lon(xy[s0 + k * 2]), c = lat(xy[s0 + k * 2 + 1]);
				cx += a;
				cy += c;
				const g = sample(a, c) / 1e3 * 1;
				if (g < gMin) gMin = g;
				if (g > gMax) gMax = g;
				xz.push(toXZ(a, c));
			}
			const hm = heights && heights[i] ? heights[i] / 10 : floors[i] ? floors[i] * FLOOR_M : FLOOR_M;
			const y0 = gMin - .004;
			const y1 = gMax + hm / 1e3 * 1;
			const bi = b.count;
			b.count += 1;
			b.info.set([
				cx / m,
				cy / m,
				floors[i],
				uses ? uses[i] : 0,
				hm
			], bi * 5);
			const v = b.vi;
			for (let k = 0; k < m; k++) {
				const [x, z] = xz[k];
				b.pos.set([
					x,
					y1,
					z
				], (v + k) * 3);
				b.pos.set([
					x,
					y0,
					z
				], (v + m + k) * 3);
				b.bid[v + k] = bi;
				b.bid[v + m + k] = bi;
			}
			let ii = b.ii;
			for (let k = 0; k < m; k++) {
				const a = v + k, c = v + (k + 1) % m, a2 = v + m + k, c2 = v + m + (k + 1) % m;
				b.idx[ii++] = a;
				b.idx[ii++] = a2;
				b.idx[ii++] = c;
				b.idx[ii++] = c;
				b.idx[ii++] = a2;
				b.idx[ii++] = c2;
			}
			const flat = new Array(m * 2);
			for (let k = 0; k < m; k++) {
				flat[k * 2] = xz[k][0];
				flat[k * 2 + 1] = xz[k][1];
			}
			const tri = earcut(flat);
			for (let t = 0; t < tri.length && ii + 2 < b.idx.length + 1; t += 3) {
				b.idx[ii++] = v + tri[t];
				b.idx[ii++] = v + tri[t + 2];
				b.idx[ii++] = v + tri[t + 1];
			}
			b.ii = ii;
			b.vi = v + m * 2;
		}
		return out.filter((b) => b.count > 0).map((b) => ({
			code: b.code,
			count: b.count,
			pos: b.pos,
			idx: b.idx.subarray(0, b.ii).slice(),
			bid: b.bid,
			info: b.info
		}));
	}
	//#endregion
	//#region src/three/terrain.worker.js
	self.onmessage = async (e) => {
		const { data, meta, pieces, spacing, first, buildings } = e.data;
		const dem = makeDem(data, meta);
		const order = [...pieces].sort((a, b) => (first.includes(a.sgg) ? 0 : 1) - (first.includes(b.sgg) ? 0 : 1));
		let n = 0;
		for (const p of order) {
			const r = buildPiece(p, dem, spacing[p.sgg] || .2);
			n += 1;
			self.postMessage({
				type: "piece",
				piece: r,
				n,
				total: order.length
			}, [
				r.pos.buffer,
				r.col.buffer,
				r.idx.buffer,
				r.line.buffer,
				r.wallPos.buffer,
				r.wallCol.buffer,
				r.wallIdx.buffer
			]);
		}
		self.postMessage({ type: "done" });
		if (!buildings?.url) return;
		try {
			const res = await fetch(buildings.url);
			if (!res.ok) throw new Error(`건물 파일 ${res.status}`);
			const buf = await res.arrayBuffer();
			const withBox = pieces.map((p) => {
				let b = [
					180,
					90,
					-180,
					-90
				];
				for (const poly of p.coordinates) for (const [x, y] of poly[0]) b = [
					Math.min(b[0], x),
					Math.min(b[1], y),
					Math.max(b[2], x),
					Math.max(b[3], y)
				];
				return {
					code: p.code,
					coordinates: p.coordinates,
					bbox: b
				};
			});
			const list = buildBuildings(readBuildings(buf, buildings.bbox), withBox, dem.sample);
			for (const r of list) self.postMessage({
				type: "buildings",
				b: r
			}, [
				r.pos.buffer,
				r.idx.buffer,
				r.bid.buffer,
				r.info.buffer
			]);
			self.postMessage({
				type: "buildingsDone",
				total: list.reduce((s, r) => s + r.count, 0)
			});
		} catch (err) {
			self.postMessage({
				type: "buildingsError",
				message: String(err?.message || err)
			});
		}
	};
	//#endregion
})();
