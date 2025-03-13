"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewCollectionPage() {
  const router = useRouter();

  // State for collection data
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [coverImageUrl, setCoverImageUrl] = useState("");
  const [destinations, setDestinations] = useState([
    { name: "", imageUrl: "", description: "", city: "", country: "" },
  ]);

  const addDestination = () => {
    setDestinations([...destinations, { name: "", imageUrl: "", description: "", city: "", country: "" }]);
  };

  const updateDestination = (index: number, field: string, value: string) => {
    const updatedDestinations = [...destinations];
    updatedDestinations[index] = { ...updatedDestinations[index], [field]: value };
    setDestinations(updatedDestinations);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newCollection = {
      title,
      description,
      coverImageUrl,
      createdAt: new Date().toISOString(),
      destinations: destinations.map((dest) => ({
        id: crypto.randomUUID(),
        name: dest.name,
        imageUrl: dest.imageUrl,
        description: dest.description,
        location: { city: dest.city, country: dest.country },
      })),
    };

    const response = await fetch("/api/collections", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCollection),
    });

    if (response.ok) {
      router.push("/");
    }
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-400 mb-6">Create a New Collection</h1>

      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md">
        {/* Collection Fields */}
        <div>
          <label className="block text-lg font-semibold text-gray-900">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full p-2 border rounded-md text-gray-900 bg-gray-100"
          />
        </div>

        <div>
          <label className="block text-lg font-semibold text-gray-900">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full p-2 border rounded-md text-gray-900 bg-gray-100"
          />
        </div>

        <div>
          <label className="block text-lg font-semibold text-gray-900">Cover Image URL</label>
          <input
            type="text"
            value={coverImageUrl}
            onChange={(e) => setCoverImageUrl(e.target.value)}
            required
            className="w-full p-2 border rounded-md text-gray-900 bg-gray-100"
          />
        </div>

        {/* Destinations */}
        <h2 className="text-2xl font-bold text-gray-900">Destinations</h2>
        {destinations.map((destination, index) => (
          <div key={index} className="p-4 border rounded-lg space-y-3 bg-gray-50">
            <input
              type="text"
              placeholder="Destination Name"
              value={destination.name}
              onChange={(e) => updateDestination(index, "name", e.target.value)}
              required
              className="w-full p-2 border rounded-md text-gray-900 bg-gray-100"
            />
            <input
              type="text"
              placeholder="Image URL"
              value={destination.imageUrl}
              onChange={(e) => updateDestination(index, "imageUrl", e.target.value)}
              required
              className="w-full p-2 border rounded-md text-gray-900 bg-gray-100"
            />
            <textarea
              placeholder="Short Description"
              value={destination.description}
              onChange={(e) => updateDestination(index, "description", e.target.value)}
              required
              className="w-full p-2 border rounded-md text-gray-900 bg-gray-100"
            />
            <input
              type="text"
              placeholder="City"
              value={destination.city}
              onChange={(e) => updateDestination(index, "city", e.target.value)}
              required
              className="w-full p-2 border rounded-md text-gray-900 bg-gray-100"
            />
            <input
              type="text"
              placeholder="Country"
              value={destination.country}
              onChange={(e) => updateDestination(index, "country", e.target.value)}
              required
              className="w-full p-2 border rounded-md text-gray-900 bg-gray-100"
            />
          </div>
        ))}
        <button
          type="button"
          onClick={addDestination}
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          + Add Destination
        </button>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded-md w-full"
        >
          Create Collection
        </button>
      </form>
    </main>
  );
}
