"use client";

import React, { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import MobileNav from "./MobileNav";
import { useAuth } from "../context/AuthContext";
import {
  INITIAL_LISTINGS,
  LISTINGS_PER_PAGE,
  type Listing,
} from "../data/mockListings";

export interface HomeProps {}

export default function Home() {
  const { isAuthenticated, userRole } = useAuth();
  const router = useRouter();
  const [listings, setListings] = useState<Listing[]>(INITIAL_LISTINGS);
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [locationSearch, setLocationSearch] = useState("");
  const [selectedType, setSelectedType] = useState("any");
  const [maxPrice, setMaxPrice] = useState(14000);
  const [selectedBeds, setSelectedBeds] = useState<string>("any");
  const [activeTags, setActiveTags] = useState<Set<string>>(new Set());
  const [sortBy, setSortBy] = useState<"verified" | "price-asc" | "newest">(
    "verified",
  );
  const [likedListings, setLikedListings] = useState<Set<string>>(new Set());
  const [visibleListingCount, setVisibleListingCount] =
    useState(LISTINGS_PER_PAGE);

  useEffect(() => {
    fetch("/api/listings")
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data: Listing[]) => {
        if (Array.isArray(data) && data.length > 0) {
          setListings((prev) => {
            const apiIds = new Set(data.map((d) => d.id));
            const remaining = prev.filter((item) => !apiIds.has(item.id));
            return [...data, ...remaining];
          });
        }
      })
      .catch((err) => {
        // Fallback silently to initial listings
      });
  }, []);

  const toggleTag = (tag: string) => {
    setActiveTags((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) next.delete(tag);
      else next.add(tag);
      return next;
    });
  };

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedListings((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const filteredListings = useMemo(() => {
    return listings
      .filter((item) => {
        const normalizedLocationSearch = locationSearch.trim().toLowerCase();
        const matchSelectLocation =
          selectedLocation === "all" ||
          item.neighborhood
            .toLowerCase()
            .includes(selectedLocation.toLowerCase());
        const matchLocationSearch =
          !normalizedLocationSearch ||
          `${item.neighborhood} ${item.subLocation}`
            .toLowerCase()
            .includes(normalizedLocationSearch);
        const matchLoc = matchSelectLocation && matchLocationSearch;
        const matchType =
          selectedType === "any" || item.propertyType === selectedType;
        const matchPrice = item.price <= maxPrice;
        const matchBeds =
          selectedBeds === "any" ||
          (selectedBeds === "1" && item.beds === 1) ||
          (selectedBeds === "2" && item.beds === 2) ||
          (selectedBeds === "3" && item.beds >= 3);

        let matchTags = true;
        if (activeTags.has("price-low") && item.price > 3000) matchTags = false;
        if (activeTags.has("eastlegon") && item.neighborhood !== "East Legon")
          matchTags = false;

        return matchLoc && matchType && matchPrice && matchBeds && matchTags;
      })
      .sort((a, b) => {
        if (sortBy === "price-asc") return a.price - b.price;
        return 0;
      });
  }, [
    listings,
    selectedLocation,
    locationSearch,
    selectedType,
    maxPrice,
    selectedBeds,
    activeTags,
    sortBy,
  ]);

  const visibleListings = filteredListings.slice(0, visibleListingCount);

  return (
    <div className="min-h-full bg-surface text-on-surface font-body-md text-body-md flex flex-col antialiased selection:bg-secondary-container selection:text-on-secondary-container">
      <Header activePath="find-a-rental" />

      <main className="flex-1 w-full bg-surface">
        <div className="flex flex-col w-full">
          {/* Dynamic Hero & Contextual Search Unit */}
          <section className="relative w-full bg-surface-container-low overflow-hidden pb-space-2xl pt-16">
            {/* Architectural decorative background mesh */}
            <div className="absolute inset-0 opacity-40 pointer-events-none">
              <svg
                className="w-full h-full text-secondary-fixed/30"
                height="100%"
                width="100%"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    height="48"
                    id="accra-grid"
                    patternUnits="userSpaceOnUse"
                    width="48"
                  >
                    <path
                      d="M 48 0 L 0 0 0 48"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.75"
                    ></path>
                  </pattern>
                </defs>
                <rect fill="url(#accra-grid)" height="100%" width="100%"></rect>
              </svg>
            </div>

            {/* Radiant soft tint aura */}
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary-fixed-dim/20 blur-3xl pointer-events-none"></div>
            <div className="absolute top-1/2 -left-20 w-80 h-80 rounded-full bg-secondary-container/30 blur-2xl pointer-events-none"></div>

            {/* Real architectural photo used as a masked contextual backdrop */}
            <div className="absolute inset-y-0 right-0 w-full md:w-[58%] pointer-events-none select-none">
              <img
                aria-hidden="true"
                alt=""
                className="h-full w-full object-cover object-center opacity-30 md:opacity-45"
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-surface-container-low via-surface-container-low/75 to-surface-container-low/20" />
              <div className="absolute inset-0 bg-surface-container-low/20" />
            </div>

            <div className="relative max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop pt-space-xl">
              {/* Editorial Header Content */}
              <div className="max-w-3xl flex flex-col gap-space-sm mb-space-xl">
                <div className="inline-flex items-center gap-space-xs self-start px-space-sm py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[1rem]">
                    verified
                  </span>
                  <span>
                    100% Verified Rentals Only • Zero Agent Viewing Fees
                  </span>
                </div>
                <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
                  Find verified rental homes across Ghana.{" "}
                  <span className="text-primary">No sales, no runarounds.</span>
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
                  Direct connection with verified landlords in East Legon,
                  Cantonments, Osu, and beyond. Verified backup power and
                  continuous water security listed on every home.
                </p>
              </div>

              {/* Multi-Layer Search Filter Deck */}
              <div className="glass-surface rounded-xl p-space-md md:p-space-lg flex flex-col gap-space-md">
                <div className="flex flex-col gap-space-xs">
                  <label
                    className="font-label-sm text-label-sm text-on-surface flex items-center gap-1"
                    htmlFor="location-search"
                  >
                    <span className="material-symbols-outlined text-[1rem] text-primary">
                      search
                    </span>
                    Search by location
                  </label>
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3 text-on-surface-variant text-[1.25rem] pointer-events-none">
                      location_on
                    </span>
                    <input
                      aria-label="Search by location"
                      className="glass-control w-full h-11 pl-10 pr-10 rounded-lg text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none focus:bg-surface-container-high transition-colors"
                      id="location-search"
                      placeholder="Search East Legon, Osu, Airport Residential..."
                      type="text"
                      value={locationSearch}
                      onChange={(e) => setLocationSearch(e.target.value)}
                    />
                    {locationSearch && (
                      <button
                        aria-label="Clear location search"
                        className="absolute right-3 text-on-surface-variant hover:text-on-surface"
                        onClick={() => setLocationSearch("")}
                        type="button"
                      >
                        <span className="material-symbols-outlined text-[1.125rem]">
                          close
                        </span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Input Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-space-sm md:gap-space-md items-end">
                  {/* Neighborhood selector */}
                  <div className="lg:col-span-4 flex flex-col gap-space-xs">
                    <label className="font-label-sm text-label-sm text-on-surface flex items-center gap-1">
                      <span className="material-symbols-outlined text-[1rem] text-primary">
                        location_on
                      </span>
                      Neighborhood in Accra
                    </label>
                    <div className="glass-control relative rounded-lg">
                      <select
                        className="w-full h-11 bg-transparent px-space-sm font-body-md text-on-surface focus:outline-none focus:bg-surface-container-high rounded-lg cursor-pointer appearance-none"
                        value={selectedLocation}
                        onChange={(e) => setSelectedLocation(e.target.value)}
                      >
                        <option value="all">All Accra Locations</option>
                        <option value="East Legon">East Legon</option>
                        <option value="Cantonments">Cantonments</option>
                        <option value="Airport Residential">
                          Airport Residential
                        </option>
                        <option value="Osu">Osu &amp; Ringway</option>
                        <option value="Dzorwulu">Dzorwulu</option>
                        <option value="Spintex">Spintex &amp; Baatsona</option>
                        <option value="Abelemkpe">Abelemkpe</option>
                        <option value="Labone">Labone</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-3 top-3 text-on-surface-variant pointer-events-none text-[1.25rem]">
                        expand_more
                      </span>
                    </div>
                  </div>

                  {/* Property Type Selector */}
                  <div className="lg:col-span-3 flex flex-col gap-space-xs">
                    <label className="font-label-sm text-label-sm text-on-surface flex items-center gap-1">
                      <span className="material-symbols-outlined text-[1rem] text-primary">
                        apartment
                      </span>
                      Rental Type
                    </label>
                    <div className="glass-control relative rounded-lg">
                      <select
                        className="w-full h-11 bg-transparent px-space-sm font-body-md text-on-surface focus:outline-none focus:bg-surface-container-high rounded-lg cursor-pointer appearance-none"
                        value={selectedType}
                        onChange={(e) => setSelectedType(e.target.value)}
                      >
                        <option value="any">Any Property Type</option>
                        <optgroup label="Hotels &amp; Lodging">
                          <option value="hotel">Hotel</option>
                          <option value="motel">Motel</option>
                          <option value="bed-breakfast">
                            B&amp;B (Bed &amp; Breakfast)
                          </option>
                          <option value="hostel">Hostel</option>
                          <option value="resort">Resort</option>
                          <option value="guesthouse">Guesthouse</option>
                          <option value="inn-lodge">Inn / Lodge</option>
                          <option value="serviced-apartment">
                            Serviced Apartment / Aparthotel
                          </option>
                          <option value="extended-stay">Extended Stay</option>
                        </optgroup>
                        <optgroup label="Self-Catered / Vacation Rentals">
                          <option value="apartment">Apartment / Condo</option>
                          <option value="studio">Private Studio</option>
                          <option value="cottage-cabin">Cottage / Cabin</option>
                          <option value="chalet">Chalet</option>
                          <option value="villa">Villa</option>
                          <option value="farmhouse-finca">
                            Farmhouse / Finca
                          </option>
                          <option value="townhouse">Townhouse</option>
                          <option value="room">Private Room in Villa</option>
                          <option value="houseboat">Houseboat / Boat</option>
                          <option value="rv-caravan-campground">
                            RV / Caravan / Campground
                          </option>
                          <option value="glamping">Glamping</option>
                        </optgroup>
                      </select>
                      <span className="material-symbols-outlined absolute right-3 top-3 text-on-surface-variant pointer-events-none text-[1.25rem]">
                        expand_more
                      </span>
                    </div>
                  </div>

                  {/* Monthly Budget Selector */}
                  <div className="lg:col-span-3 flex flex-col gap-space-xs">
                    <div className="flex items-center justify-between">
                      <label className="font-label-sm text-label-sm text-on-surface flex items-center gap-1">
                        <span className="material-symbols-outlined text-[1rem] text-primary">
                          payments
                        </span>
                        Monthly Budget
                      </label>
                      <span className="font-label-sm text-label-sm text-primary font-bold">
                        Max GH₵ {maxPrice.toLocaleString()}
                      </span>
                    </div>
                    <div className="h-11 bg-surface-container-low px-space-sm rounded-lg flex items-center">
                      <input
                        className="w-full accent-primary cursor-pointer"
                        max={18000}
                        min={1500}
                        step={500}
                        type="range"
                        value={maxPrice}
                        onChange={(e) =>
                          setMaxPrice(parseInt(e.target.value, 10))
                        }
                      />
                    </div>
                  </div>

                  {/* Primary Action */}
                  <div className="lg:col-span-2">
                    <button
                      type="button"
                      className="w-full h-11 bg-primary hover:bg-primary-container text-on-primary rounded-lg font-label-md text-label-md flex items-center justify-center gap-space-xs transition-all shadow-md active:scale-[0.98]"
                    >
                      <span className="material-symbols-outlined text-[1.25rem]">
                        search
                      </span>
                      <span>Find Rentals</span>
                    </button>
                  </div>
                </div>

                {/* Bedroom Filters Row */}
                <div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xs">
                  <div className="flex items-center gap-space-xs flex-wrap">
                    <span className="font-caption text-caption text-on-surface-variant uppercase tracking-wider mr-1">
                      Bedrooms:
                    </span>
                    {(["any", "1", "2", "3"] as const).map((bed) => (
                      <button
                        key={bed}
                        type="button"
                        className={`px-space-sm py-1 rounded-full font-label-sm text-label-sm transition-colors ${
                          selectedBeds === bed
                            ? "bg-secondary-container text-on-secondary-container font-bold shadow-sm"
                            : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
                        }`}
                        onClick={() => setSelectedBeds(bed)}
                      >
                        {bed === "any"
                          ? "Any"
                          : bed === "1"
                            ? "1 Bed / Studio"
                            : bed === "2"
                              ? "2 Beds"
                              : "3+ Beds"}
                      </button>
                    ))}
                  </div>
                  <div className="flex items-center gap-space-xs text-on-surface-variant font-caption text-caption">
                    <span className="material-symbols-outlined text-primary text-[1rem]">
                      shield_locked
                    </span>
                    <span>Accra Landlords Vetted with GhanaCard</span>
                  </div>
                </div>
              </div>

              {/* Quick Filter Tags Bar */}
              <div className="mt-space-md flex items-center gap-space-xs overflow-x-auto pb-1 scrollbar-none">
                <span className="font-caption text-caption text-on-surface-variant whitespace-nowrap mr-1">
                  Popular Filters:
                </span>
                <button
                  type="button"
                  onClick={() => {
                    toggleTag("price-low");
                    if (!activeTags.has("price-low")) setMaxPrice(3000);
                  }}
                  className={`tag-chip flex-shrink-0 px-space-sm py-1 rounded-full font-label-sm text-label-sm shadow-sm transition-colors flex items-center gap-1 ${
                    activeTags.has("price-low")
                      ? "bg-secondary-container text-on-secondary-container font-bold"
                      : "glass-chip text-on-surface hover:bg-surface-container-high"
                  }`}
                >
                  <span className="material-symbols-outlined text-[0.875rem] text-primary">
                    sell
                  </span>
                  Under GH₵ 3,000/mo
                </button>
                <button
                  type="button"
                  onClick={() => toggleTag("furnished")}
                  className={`tag-chip flex-shrink-0 px-space-sm py-1 rounded-full font-label-sm text-label-sm shadow-sm transition-colors flex items-center gap-1 ${
                    activeTags.has("furnished")
                      ? "bg-secondary-container text-on-secondary-container font-bold"
                      : "glass-chip text-on-surface hover:bg-surface-container-high"
                  }`}
                >
                  <span className="material-symbols-outlined text-[0.875rem] text-primary">
                    chair
                  </span>
                  Furnished
                </button>
                <button
                  type="button"
                  onClick={() => toggleTag("gen")}
                  className={`tag-chip flex-shrink-0 px-space-sm py-1 rounded-full font-label-sm text-label-sm shadow-sm transition-colors flex items-center gap-1 ${
                    activeTags.has("gen")
                      ? "bg-secondary-container text-on-secondary-container font-bold"
                      : "glass-chip text-on-surface hover:bg-surface-container-high"
                  }`}
                >
                  <span className="material-symbols-outlined text-[0.875rem] text-primary">
                    bolt
                  </span>
                  Standby Generator
                </button>
                <button
                  type="button"
                  onClick={() => toggleTag("polytank")}
                  className={`tag-chip flex-shrink-0 px-space-sm py-1 rounded-full font-label-sm text-label-sm shadow-sm transition-colors flex items-center gap-1 ${
                    activeTags.has("polytank")
                      ? "bg-secondary-container text-on-secondary-container font-bold"
                      : "glass-chip text-on-surface hover:bg-surface-container-high"
                  }`}
                >
                  <span className="material-symbols-outlined text-[0.875rem] text-primary">
                    water_drop
                  </span>
                  Water Reservoir (Polytank)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    toggleTag("eastlegon");
                    setSelectedLocation(
                      activeTags.has("eastlegon") ? "all" : "East Legon",
                    );
                  }}
                  className={`tag-chip flex-shrink-0 px-space-sm py-1 rounded-full font-label-sm text-label-sm shadow-sm transition-colors flex items-center gap-1 ${
                    activeTags.has("eastlegon")
                      ? "bg-secondary-container text-on-secondary-container font-bold"
                      : "glass-chip text-on-surface hover:bg-surface-container-high"
                  }`}
                >
                  <span className="material-symbols-outlined text-[0.875rem] text-primary">
                    near_me
                  </span>
                  East Legon
                </button>
                <button
                  type="button"
                  onClick={() => toggleTag("selfcontained")}
                  className={`tag-chip flex-shrink-0 px-space-sm py-1 rounded-full font-label-sm text-label-sm shadow-sm transition-colors flex items-center gap-1 ${
                    activeTags.has("selfcontained")
                      ? "bg-secondary-container text-on-secondary-container font-bold"
                      : "glass-chip text-on-surface hover:bg-surface-container-high"
                  }`}
                >
                  <span className="material-symbols-outlined text-[0.875rem] text-primary">
                    door_front
                  </span>
                  Self-Contained
                </button>
              </div>
            </div>
          </section>

          {/* Main Catalog View Area */}
          <section className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl w-full">
            {/* Results Header with Count & Sort Controls */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-lg">
              <div className="flex flex-col">
                <h2 className="font-headline-lg text-headline-lg text-on-surface">
                  Featured verified rentals in Accra
                </h2>
                <div className="flex items-center gap-space-xs mt-0.5">
                  <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {filteredListings.length} verified homes match your Accra
                    criteria
                  </p>
                </div>
              </div>

              {/* Sorting Pill Strip */}
              <div className="flex items-center gap-space-xs self-start sm:self-auto bg-surface-container-low p-1 rounded-lg">
                <span className="font-caption text-caption text-on-surface-variant px-space-xs hidden md:inline">
                  Sort:
                </span>
                <button
                  type="button"
                  className={`px-space-sm py-1 rounded font-label-sm text-label-sm transition-all ${
                    sortBy === "verified"
                      ? "text-on-surface bg-surface-container-lowest shadow-sm font-semibold"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                  onClick={() => setSortBy("verified")}
                >
                  Verified First
                </button>
                <button
                  type="button"
                  className={`px-space-sm py-1 rounded font-label-sm text-label-sm transition-all ${
                    sortBy === "price-asc"
                      ? "text-on-surface bg-surface-container-lowest shadow-sm font-semibold"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                  onClick={() => setSortBy("price-asc")}
                >
                  Price: Low to High
                </button>
                <button
                  type="button"
                  className={`px-space-sm py-1 rounded font-label-sm text-label-sm transition-all ${
                    sortBy === "newest"
                      ? "text-on-surface bg-surface-container-lowest shadow-sm font-semibold"
                      : "text-on-surface-variant hover:text-on-surface"
                  }`}
                  onClick={() => setSortBy("newest")}
                >
                  Newest
                </button>
              </div>
            </div>

            {/* Rental Listings Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter-desktop">
              {visibleListings.map((card) => {
                const isLiked = likedListings.has(card.id);
                return (
                  <div
                    key={card.id}
                    onClick={() =>
                      router.push(
                        `/property-detail/${card.id}?price=${card.price}`,
                      )
                    }
                    className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
                  >
                    <div>
                      {/* Visual & Badges */}
                      <div className="relative w-full aspect-[16/10] overflow-hidden bg-surface-container">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          alt={card.title}
                          src={card.imgUrl}
                        />
                        <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md shadow-sm">
                          <span className="material-symbols-outlined text-primary text-[1rem]">
                            verified
                          </span>
                          <span className="font-label-sm text-label-sm text-on-surface">
                            {card.hostBadge}
                          </span>
                        </div>
                        <button
                          type="button"
                          aria-label="Save rental"
                          onClick={(e) => toggleLike(card.id, e)}
                          className={`absolute top-3 right-3 w-8 h-8 rounded-full bg-surface-container-lowest/90 backdrop-blur-md shadow-sm flex items-center justify-center transition-colors ${
                            isLiked
                              ? "text-error"
                              : "text-on-surface-variant hover:text-error"
                          }`}
                        >
                          <span
                            className="material-symbols-outlined text-[1.25rem]"
                            style={{
                              fontVariationSettings: isLiked
                                ? "'FILL' 1"
                                : "'FILL' 0",
                            }}
                          >
                            favorite
                          </span>
                        </button>
                        <div className="absolute bottom-3 left-3 px-2 py-0.5 rounded bg-surface-container-lowest text-primary font-label-sm text-label-sm shadow-sm">
                          {card.neighborhood}
                        </div>
                      </div>

                      {/* Body */}
                      <div className="p-space-md flex flex-col gap-space-xs">
                        <div className="flex items-center gap-space-xs text-primary font-label-sm text-label-sm">
                          <span className="capitalize">
                            {card.propertyType}
                          </span>
                          <span>•</span>
                          <span className="text-on-surface-variant">
                            {card.subLocation}
                          </span>
                        </div>
                        <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors line-clamp-1">
                          {card.title}
                        </h3>
                        {/* Specs */}
                        <div className="flex flex-wrap items-center gap-2 pt-1 font-body-sm text-body-sm text-on-surface-variant">
                          <span className="inline-flex items-center gap-1">
                            <span className="material-symbols-outlined text-[1rem] text-primary">
                              bed
                            </span>{" "}
                            {card.beds} Beds
                          </span>
                          <span>•</span>
                          <span className="inline-flex items-center gap-1">
                            <span className="material-symbols-outlined text-[1rem] text-primary">
                              shower
                            </span>{" "}
                            {card.baths} Baths
                          </span>
                          {card.amenities.map((amenity, idx) => (
                            <React.Fragment key={idx}>
                              <span>•</span>
                              <span className="inline-flex items-center gap-1 text-secondary">
                                {amenity}
                              </span>
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Price Block */}
                    <div className="px-space-md pb-space-md pt-space-xs flex items-center justify-between bg-surface-container-lowest">
                      <div className="flex items-baseline gap-1">
                        <span className="font-price-display text-price-display text-on-surface">
                          GH₵ {card.price.toLocaleString()}
                        </span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          / month
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          router.push(
                            `/property-detail/${card.id}?price=${card.price}`,
                          );
                        }}
                        className="px-space-sm py-1.5 rounded-lg bg-surface-container hover:bg-primary hover:text-on-primary text-on-surface font-label-sm text-label-sm transition-colors"
                      >
                        Inquire Direct
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Load More Button */}
            <div className="mt-space-2xl flex flex-col items-center justify-center gap-space-sm">
              <button
                type="button"
                disabled={visibleListingCount >= filteredListings.length}
                onClick={() =>
                  setVisibleListingCount((count) =>
                    Math.min(
                      count + LISTINGS_PER_PAGE,
                      filteredListings.length,
                    ),
                  )
                }
                className="px-space-xl py-space-sm rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md transition-all flex items-center gap-space-xs shadow-sm"
              >
                <span>
                  {visibleListingCount >= filteredListings.length
                    ? "All matching rentals loaded"
                    : "Load more Accra rentals"}
                </span>
                <span className="material-symbols-outlined text-[1.125rem]">
                  expand_more
                </span>
              </button>
              <span className="font-caption text-caption text-on-surface-variant">
                Showing {Math.min(visibleListingCount, filteredListings.length)}{" "}
                of {filteredListings.length} properties verified in Greater
                Accra
              </span>
            </div>
          </section>

          {/* Neighborhood Explorer Teaser Bar */}
          <section className="w-full bg-surface-container-low py-space-2xl">
            <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-lg">
                <div>
                  <span className="font-label-sm text-label-sm text-primary uppercase tracking-widest">
                    Neighborhood Focus
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface mt-1">
                    Accra rental hubs at a glance
                  </h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                  Average rents verified through signed lease settlements in
                  Ghana Cedis.
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-space-sm">
                {[
                  { name: "East Legon", avg: "7,200", count: 48 },
                  { name: "Cantonments", avg: "12,500", count: 29 },
                  { name: "Osu & Ringway", avg: "4,000", count: 34 },
                  { name: "Dzorwulu", avg: "5,800", count: 18 },
                  { name: "Airport Res.", avg: "13,800", count: 21 },
                  { name: "Spintex Road", avg: "2,400", count: 52 },
                ].map((hub) => (
                  <div
                    key={hub.name}
                    onClick={() => {
                      setSelectedLocation(hub.name.split(" ")[0]);
                      window.scrollTo({ top: 300, behavior: "smooth" });
                    }}
                    className="bg-surface-container-lowest p-space-sm rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer flex flex-col"
                  >
                    <span className="font-label-md text-label-md text-on-surface font-bold">
                      {hub.name}
                    </span>
                    <span className="font-caption text-caption text-primary">
                      Avg. GH₵ {hub.avg}/mo
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                      {hub.count} rentals active
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Value Proposition Section */}
          <section className="w-full bg-surface py-space-2xl">
            <div className="max-w-7xl mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
              <div className="text-center max-w-2xl mx-auto mb-space-2xl">
                <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-sm text-label-sm mb-space-xs">
                  <span className="material-symbols-outlined text-[1rem]">
                    verified_user
                  </span>
                  <span>The Accra Rental Standard</span>
                </div>
                <h2 className="font-headline-xl text-headline-xl text-on-surface">
                  Why rent through Ecoshel?
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mt-2">
                  We eliminated the traditional stress of Accra housing hunts.
                  Transparent terms, authentic owners, and genuine
                  infrastructure verification.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-desktop">
                {/* Pillar 1 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-sm hover:translate-y-[-2px] transition-transform">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[1.75rem]">
                      chat
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    Direct Landlord Chat
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Connect straight to GhanaCard-verified property owners and
                    registered managers. Zero ghost intermediaries or middleman
                    commission inflation.
                  </p>
                  <div className="pt-space-xs flex items-center gap-2 text-primary font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-[1.125rem]">
                      check_circle
                    </span>
                    <span>Real-time tenant-landlord messaging</span>
                  </div>
                </div>
                {/* Pillar 2 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-sm hover:translate-y-[-2px] transition-transform">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[1.75rem]">
                      money_off
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    Zero Agent Viewing Fees
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Never pay non-refundable &quot;registration or inspection
                    fees&quot; just to inspect a flat. Browse, request an
                    in-person walk-through, and rent freely.
                  </p>
                  <div className="pt-space-xs flex items-center gap-2 text-primary font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-[1.125rem]">
                      check_circle
                    </span>
                    <span>100% free home viewing protocol</span>
                  </div>
                </div>
                {/* Pillar 3 */}
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-sm hover:translate-y-[-2px] transition-transform">
                  <div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined text-[1.75rem]">
                      bolt
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    Power &amp; Water Certainty
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Every listing transparently discloses standby automatic
                    generators, solar inverters, and dedicated polytank water
                    storage volume.
                  </p>
                  <div className="pt-space-xs flex items-center gap-2 text-primary font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-[1.125rem]">
                      check_circle
                    </span>
                    <span>Physical site verification reports</span>
                  </div>
                </div>
              </div>

              {/* Trust Assurance Box */}
              <div className="mt-space-xl bg-surface-container-low rounded-xl p-space-lg flex flex-col md:flex-row items-center justify-between gap-space-md shadow-sm">
                <div className="flex items-center gap-space-md">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-on-primary flex-shrink-0">
                    <span className="material-symbols-outlined text-[2rem]">
                      gavel
                    </span>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface">
                      Standardized Ghana Rent Act Compliant Leases
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Ecoshel digital tenancy agreements protect both parties
                      with formal dispute resolution escrow safeguards.
                    </p>
                  </div>
                </div>
                <a
                  className="px-space-md py-space-sm rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container-high transition-colors font-label-md text-label-md whitespace-nowrap shadow-sm"
                  data-path="how-it-works"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  Learn Tenancy Guidelines
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
      <MobileNav activePath="find-a-rental" />
    </div>
  );
}
